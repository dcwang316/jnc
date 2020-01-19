import style from './style.scss';
import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ajaxAPI } from 'util/ajaxFunc';

const imgUrl = 'http://jnc.quduoduo.cc/files/';
import { getUrlParams } from 'util/tool';

export default class Activity extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activity: [{ details: '' }],
        }
    }

    componentDidMount() {
        this.props.history.listen(() => {
            document.documentElement.scrollTop = document.body.scrollTop = 0;
        });
        let { id } = getUrlParams(window.location.search);
        ajaxAPI("/jnc/active/policy/selectById/" + id).done(({ rspCode, data }) => {
            if (rspCode === '000000') {
                this.setState({
                    activity: data
                }, () => {
                    AOS.init({
                        offset: 200,
                        duration: 1000,
                        easing: 'ease',
                        delay: 100,
                        once: 'true'
                    })
                })
            }
        });
    }

    componentWillReceiveProps(newProps) {
        let { id } = getUrlParams(newProps.location.search);
        ajaxAPI("/jnc/active/policy/selectById/" + id).done(({ rspCode, data }) => {
            if (rspCode === '000000') {
                this.setState({
                    activity: data
                }, () => {
                    AOS.init({
                        offset: 200,
                        duration: 1000,
                        easing: 'ease',
                        delay: 100,
                        once: 'true'
                    })
                })
            }
        });
    }

    render() {
        let { activity: { backImage, backInfo = '', details = '', activities = [] } } = this.state;
        let styles = {
            backgroundImage: 'url(' + imgUrl + backImage + ')',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center bottom',
            backgroundSize: 'cover'
        };
        return (
            <div className={style.latest_activity}>
                <div className={style.acbanner} style={styles}>
                    <div className={style.wrap}>
                        <p className={style.tt1}>{backInfo.indexOf('，') !== -1 ? backInfo.substr(0, backInfo.indexOf('，')) : backInfo}</p>
                        <p className={style.tt2}>{backInfo.indexOf('，') !== -1 ? backInfo.substr(backInfo.indexOf('，') + 1) : ''}</p>
                        <ul className={style.list + ' clearfix'}>
                            {
                                activities.slice(0, 4).map((o, i) => (
                                    <li key={i} data-aos="zoom-in" data-aos-offset="200" data-aos-duration="1000">
                                        <a>
                                            <div className={style.pic}>
                                                <img src={imgUrl + o.image} alt="" />
                                            </div>
                                            <div className={style.name}>
                                                <span className={style.nn}>{o.title}</span>
                                                <span className={style.num}>{o.quota ? o.quota + '名' : ''}</span>
                                            </div>
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className={style.activity_brief}>
                    <div className={style.wrap} id="wrap">
                        <div className={style.detail} dangerouslySetInnerHTML={{
                            __html: details
                        }}></div>
                    </div>
                </div>
                <div className="copyright">
                    <a>四川剑南春(集团)有限责任公司</a>
                    &nbsp;&nbsp;All Rights Reserved&nbsp;&nbsp;
                    <a href="http://beian.miit.gov.cn/" target="_blank">蜀ICP备05018250号</a>&nbsp;&nbsp;
                     <img style={{ verticalAlign: 'top' }} src={require('style/ga.png')} width='14' height='14' />川公网安备
                    <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=51068302000111" target="_blank">51068302000111号</a>
                </div>
            </div>
        );
    }
}