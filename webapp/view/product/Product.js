import style from './style.scss';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ajaxAPI } from 'util/ajaxFunc';

const imgUrl = 'http://jnc.quduoduo.cc/files/';

const pl1 = require("./images/pl1.png");
const pl2 = require("./images/pl2.png");
const pl3 = require("./images/pl3.png");
const pl4 = require("./images/pl4.png");
const pl5 = require("./images/pl5.png");
const pl6 = require("./images/pl6.png");
const pl7 = require("./images/pl7.png");
const pl8 = require("./images/pl8.png");

export default class Product extends Component {

    constructor(props) {
        super(props);
        this.state = {
            series: []
        };
    }

    componentDidMount() {
        this.props.history.listen(() => {
            document.documentElement.scrollTop = document.body.scrollTop = 0;
        });
        AOS.init({
            offset: 200,
            duration: 1000,
            easing: 'ease',
            delay: 100,
            once: 'true'
        });
        ajaxAPI('/jnc/product/series/all').done(({ rspCode, data }) => {
            if (rspCode === '000000') {
                this.setState({
                    series: data
                })
            }
        })
    }

    render() {
        let { series } = this.state;
        return (
            <div>
                <div className={style.product_list}>
                    <div className={style.wrap}>
                        {/* <p className={style.title}>产品系列</p> */}
                        <ul className={style.list + ' clearfix'}>
                            {/* <li data-aos="fade-up">
                                <div className={style.itemer}>
                                    <p className={style.name}><img src={pl1} alt="" /> 系列</p>
                                    <div className={style.state}>
                                        <p>剑南春酒甄选优质五粮为原料，采用传承千年，不断丰富与完善的古老秘法为酿造技艺，经数百年古窖发酵，经年贮存，精心勾兑调味而成。</p>
                                    </div>
                                    <p className={style.more}><Link to="/series">查看详情》</Link></p>
                                </div>
                            </li> */}
                            {
                                series.map((o, i) => (
                                    <li data-aos="fade-up" key={o.id}>
                                        <div className={style.itemer}>
                                            <div className={style.name}>
                                                <div className={style.limg}><img src={imgUrl + o.logo} alt="" /></div>
                                                <p>系列</p>
                                            </div>
                                            {/* <p className={style.name}><img src={imgUrl + o.logo} alt="" /> 系列</p>*/}
                                            <div className={style.state}>
                                                <p>{o.summary}</p>
                                            </div>
                                            <p className={style.more}><Link to={`${process.env.ROUTE_PREFIX}/series?id=${o.id}&img=${o.banner}`}>查看详情》</Link></p>
                                        </div>
                                    </li>
                                ))
                            }
                            {/* <li data-aos="fade-up">
                                <div className={style.itemer}>
                                    <p className={style.name}><img src={pl2} alt="" /> 系列</p>
                                    <div className={style.state}>
                                        <p>剑南春酒甄选优质五粮为原料，采用传承千年，不断丰富与完善的古老秘法为酿造技艺，经数百年古窖发酵，经年贮存，精心勾兑调味而成。</p>
                                    </div>
                                    <p className={style.more}><Link to="/series">查看详情》</Link></p>
                                </div>
                            </li>
                            <li data-aos="fade-up">
                                <div className={style.itemer}>
                                    <p className={style.name}><img src={pl3} alt="" /> 系列</p>
                                    <div className={style.state}>
                                        <p>剑南春酒甄选优质五粮为原料，采用传承千年，不断丰富与完善的古老秘法为酿造技艺，经数百年古窖发酵，经年贮存，精心勾兑调味而成。</p>
                                    </div>
                                    <p className={style.more}><Link to="/series">查看详情》</Link></p>
                                </div>
                            </li>
                            <li data-aos="fade-up">
                                <div className={style.itemer}>
                                    <p className={style.name}><img src={pl4} alt="" /> 系列</p>
                                    <div className={style.state}>
                                        <p>剑南春酒甄选优质五粮为原料，采用传承千年，不断丰富与完善的古老秘法为酿造技艺，经数百年古窖发酵，经年贮存，精心勾兑调味而成。</p>
                                    </div>
                                    <p className={style.more}><Link to="/series">查看详情》</Link></p>
                                </div>
                            </li>
                            <li data-aos="fade-up">
                                <div className={style.itemer}>
                                    <p className={style.name}><img src={pl5} alt="" /> 系列</p>
                                    <div className={style.state}>
                                        <p>剑南春酒甄选优质五粮为原料，采用传承千年，不断丰富与完善的古老秘法为酿造技艺，经数百年古窖发酵，经年贮存，精心勾兑调味而成。</p>
                                    </div>
                                    <p className={style.more}><Link to="/series">查看详情》</Link></p>
                                </div>
                            </li>
                            <li data-aos="fade-up">
                                <div className={style.itemer}>
                                    <p className={style.name}><img src={pl6} alt="" /> 系列</p>
                                    <div className={style.state}>
                                        <p>剑南春酒甄选优质五粮为原料，采用传承千年，不断丰富与完善的古老秘法为酿造技艺，经数百年古窖发酵，经年贮存，精心勾兑调味而成。</p>
                                    </div>
                                    <p className={style.more}><Link to="/series">查看详情》</Link></p>
                                </div>
                            </li>
                            <li data-aos="fade-up">
                                <div className={style.itemer}>
                                    <p className={style.name}><img src={pl7} alt="" /> 系列</p>
                                    <div className={style.state}>
                                        <p>剑南春酒甄选优质五粮为原料，采用传承千年，不断丰富与完善的古老秘法为酿造技艺，经数百年古窖发酵，经年贮存，精心勾兑调味而成。</p>
                                    </div>
                                    <p className={style.more}><Link to="/series">查看详情》</Link></p>
                                </div>
                            </li>
                            <li data-aos="fade-up">
                                <div className={style.itemer}>
                                    <p className={style.name}><img src={pl8} alt="" /> 系列</p>
                                    <div className={style.state}>
                                        <p>剑南春酒甄选优质五粮为原料，采用传承千年，不断丰富与完善的古老秘法为酿造技艺，经数百年古窖发酵，经年贮存，精心勾兑调味而成。</p>
                                    </div>
                                    <p className={style.more}><Link to="/series">查看详情》</Link></p>
                                </div>
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