import style from './style.scss';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ajaxAPI } from 'util/ajaxFunc';
import { getUrlParams } from 'util/tool';

// import psub from "./images/psub.png";
// import p2 from "./images/p2.png";
// import p3 from "./images/p3.png";
const imgUrl = 'http://jnc.quduoduo.cc/files/';

export default class Series extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [],
            topImg: ''
        }
    }

    onSearch = (id, img) => {
        ajaxAPI('/jnc/product/detail/selectBySeries/' + id).done(({ rspCode, data }) => {
            if (rspCode === '000000') {
                this.setState({ list: data, topImg: imgUrl + img }, () => {
                    AOS.init({
                        offset: 200,
                        duration: 1000,
                        easing: 'ease',
                        delay: 100,
                        once: 'true'
                    });
                })
            }
        });
    }
    componentDidMount() {
        this.props.history.listen(() => {
            document.documentElement.scrollTop = document.body.scrollTop = 0;
        });
        let { id, img } = getUrlParams(window.location.search);
        this.onSearch(id, img);
    }

    componentWillReceiveProps(newProps) {
        this.props.history.listen(() => {
            document.documentElement.scrollTop = document.body.scrollTop = 0;
        });

        let { id, img } = getUrlParams(newProps.location.search);
        this.onSearch(id, img);
    }

    render() {
        let { list, topImg } = this.state;
        let { img } = getUrlParams(window.location.search);
        return (
            <div>
                <div className={style.product_center}>
                    <div className={style.subbanner}><img src={topImg} alt="" /></div>
                    <div className={style.wrap}>
                        <ul className={style.list + " clearfix"}>

                            {
                                list.map((o, i) => (
                                    <li key={o.id} data-aos="fade-up">
                                        <Link to={`${process.env.ROUTE_PREFIX}/productdetails?id=${o.id}&img=${img}`}>
                                            <div className={style.pic}><img src={imgUrl + o.image} alt="" /></div>
                                            <div className={style.con}>
                                                <p className={style.tt1}>{o.name}</p>
                                                <p className={style.tt2}>{o.description}</p>
                                                <p className={style.more}>去看看></p>
                                            </div>
                                        </Link>
                                    </li>
                                ))
                            }
                            {/* <li data-aos="fade-up">
                                <Link to="/productdetails">
                                    <div className={style.pic}><img src={p3} alt="" /></div>
                                    <div className={style.con}>
                                        <p className={style.tt1}>46° 东方红1949</p>
                                        <p className={style.tt2}>500ml 口感浓香型</p>
                                        <p className={style.more}>去看看></p>
                                    </div>
                                </Link>
                            </li>
                            <li data-aos="fade-up">
                                <Link to="/productdetails">
                                    <div className={style.pic}><img src={p2} alt="" /></div>
                                    <div className={style.con}>
                                        <p className={style.tt1}>46° 东方红1949</p>
                                        <p className={style.tt2}>500ml 口感浓香型</p>
                                        <p className={style.more}>去看看></p>
                                    </div>
                                </Link>
                            </li> */}
                        </ul>
                    </div>
                </div>
                <div className="copyright">
                    <a>四川剑南春(集团)有限责任公司</a>
                    &nbsp;&nbsp;All Rights Reserved&nbsp;&nbsp;
                     <a href="http://beian.miit.gov.cn/" target="_blank">蜀ICP备05018250号</a>&nbsp;&nbsp;
                     <img style={{ verticalAlign: 'top' }} src={require('style/ga.png')} width='14' height='14' />川公网安备
                      <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=51068302000111" target="_blank">51068302000111号</a>
                </div>
            </div >
        );
    }
}