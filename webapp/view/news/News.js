import style from './style.scss';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Swiper from 'swiper';
import 'style/swiper.min.css';
import { ajaxAPI } from 'util/ajaxFunc';

// const n1 = require("./images/n1.png");
// const n2 = require("./images/n2.png");
// const n3 = require("./images/n3.png");
// const n4 = require("./images/n4.png");
// const n5 = require("./images/n5.png");
// const n6 = require("./images/n6.png");
// const n7 = require("./images/n7.png");

const imgUrl = 'http://jnc.quduoduo.cc/files/';

export default class News extends Component {

    constructor(props) {
        super(props);
        this.state = {
            jdnews: [],
            wznews: [],
            tpnews: [],
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
        ajaxAPI("/jnc/news/page", { type: 1, pageSize: 3 }).done(({ rspCode, data }) => {
            if (rspCode === '000000') {
                this.setState({
                    jdnews: data.records
                }, () => {
                    new Swiper('.imgswiper', {
                        autoplay: true,
                        // loop: true,
                        pagination: {
                            el: '.imgswiper .swiper-pagination',
                            clickable: true,
                        }
                    });
                })
            }
        })
        ajaxAPI("/jnc/news/page", { type: 2, pageSize: 2 }).done(({ rspCode, data }) => {
            if (rspCode === '000000') {
                this.setState({
                    wznews: data.records
                }, () => {
                    setTimeout(function () {
                        $(".pwrap").each(function (i) {
                            let $p = $("p", $(this)).eq(0);
                            $p.text($p.text() + '...[查看详情]');
                            let divH = $(this).height();
                            while ($p.outerHeight() > divH) {
                                $p.text($p.text().replace(/(\s)*([a-zA-Z0-9]+|\W)(\-\-\-)?$/, "---"));
                            };
                            let txt = $p.text();
                            if (txt.includes('---')) {
                                $p.text(txt.substr(0, txt.indexOf('---') - 4) + '...[查看详情]');
                            }
                        });
                    }, 0)
                })
            }
        })
        ajaxAPI("/jnc/news/page", { type: 3, pageSize: 6 }).done(({ rspCode, data }) => {
            if (rspCode === '000000') {
                this.setState({
                    tpnews: data.records
                })
            }
        })

    }

    render() {
        let { jdnews, wznews, tpnews } = this.state;
        return (
            <div>
                <div className={style.newsbox}>
                    <div className={style.wrap}>
                        <div className={style.hotnews + " clearfix"}>
                            {/* <div className={style.imgnews + " fl"} data-aos="fade-up"><a><img src={n1} alt="" />
                                <p>剑南春带100名消费者探秘南极</p>
                            </a>
                            </div> */}

                            <div className={style.imgnews + " imgswiper fl"} data-aos="fade-up">
                                <ul className="swiper-wrapper">
                                    {
                                        jdnews.map((o, i) => (
                                            <li className="swiper-slide" key={o.id}>
                                                <Link to={`${process.env.ROUTE_PREFIX}/news/newsDetails?id=${o.id}`}><img src={imgUrl + o.image} alt="" /><p>{o.title}</p></Link>
                                            </li>
                                        ))
                                    }
                                    {/* <li className="swiper-slide">
                                        <a><img src={n1} alt="" /><p>剑南春带100名消费者探秘南极</p></a>
                                    </li>
                                    <li className="swiper-slide">
                                        <a><img src={n1} alt="" /><p>剑南春带100名消费者探秘南极</p></a>
                                    </li>
                                    <li className="swiper-slide">
                                        <a><img src={n1} alt="" /><p>剑南春带100名消费者探秘南极</p></a>
                                    </li> */}
                                </ul>
                                <div className={style.swiper_pages + " swiper-pagination"}></div>
                            </div>
                            <div className={style.right}>
                                <p className={style.ntt}>公告公示 <Link className={style.more} to={`${process.env.ROUTE_PREFIX}/news/newslist?type=2`}>查看全部</Link></p>
                                <ul>
                                    {/* <li data-aos="fade-up">
                                        <Link to="/news/newsDetails">
                                            <p className={style.title}>剑南春带100名消费者探秘南极，新品“南极之心”震撼首发</p>
                                            <div className={style.description}>
                                                <p>由剑南春总冠名，腾讯新闻出品的大型探险类纪录片《探秘行星地球》南极篇正在热播之中。据了解，影师陈帅等网络达人剑南春还邀请了…[</p>
                                            </div>
                                            <p className={style.date}>2019.07.08</p>
                                        </Link>
                                    </li> */}
                                    {
                                        wznews.map((o, i) => (
                                            <li data-aos="fade-up" key={o.id}>
                                                <Link to={`${process.env.ROUTE_PREFIX}/news/newsDetails?id=${o.id}`}>
                                                    <p className={style.title}>{o.title}</p>
                                                    <div className={style.description + ' pwrap'}>
                                                        <p>{o.summary}</p>
                                                    </div>
                                                    <p className={style.date}>{o.publishTime}</p>
                                                </Link>
                                            </li>
                                        ))
                                    }
                                    {/* <li data-aos="fade-up">
                                        <Link to="/news/newsDetails">
                                            <p className={style.title}>剑南春带100名消费者探秘南极，新品“南极之心”震撼首发</p>
                                            <div className={style.description}>
                                                <p>由剑南春总冠名，腾讯新闻出品的大型探险类纪录片《探秘行星地球》南极篇正在热播之中。据了解，影师陈帅等网络达人剑南春还邀请了…[</p>
                                            </div>
                                            <p className={style.date}>2019.07.08</p>
                                        </Link>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                        <p className={style.ntt}>最新资讯 <Link className={style.more} to={`${process.env.ROUTE_PREFIX}/news/newslist?type=3`}>查看全部</Link></p>
                        <ul className={style.list + " clearfix"}>
                            {/* <li data-aos="fade-up">
                                <Link to="/news/newsDetails">
                                    <div className={style.pic}><img src={n2} alt="" /></div>
                                    <div className={style.con}>
                                        <p className={style.title}>中国三大名酒剑南春亮相世界三大地标，携手
                                    潘基文、福布斯为中国文化点赞！</p>
                                        <p className={style.date}>2019.08.07</p>
                                    </div>
                                </Link>
                            </li> */}
                            {
                                tpnews.map((o, i) => (
                                    <li data-aos="fade-up" key={o.id}>
                                        <Link to={`${process.env.ROUTE_PREFIX}/news/newsDetails?id=${o.id}`}>
                                            <div className={style.pic}><img src={imgUrl + o.image} alt="" /></div>
                                            <div className={style.con}>
                                                <p className={style.title}>{o.title}</p>
                                                <p className={style.date}>{o.publishTime}</p>
                                            </div>
                                        </Link>
                                    </li>
                                ))
                            }
                            {/* <li data-aos="fade-up">
                                <Link to="/news/newsDetails">
                                    <div className={style.pic}><img src={n3} alt="" /></div>
                                    <div className={style.con}>
                                        <p className={style.title}>中国三大名酒剑南春亮相世界三大地标，携手
                                    潘基文、福布斯为中国文化点赞！</p>
                                        <p className={style.date}>2019.08.07</p>
                                    </div>
                                </Link>
                            </li>
                            <li data-aos="fade-up">
                                <Link to="/news/newsDetails">
                                    <div className={style.pic}><img src={n4} alt="" /></div>
                                    <div className={style.con}>
                                        <p className={style.title}>中国三大名酒剑南春亮相世界三大地标，携手
                                    潘基文、福布斯为中国文化点赞！</p>
                                        <p className={style.date}>2019.08.07</p>
                                    </div>
                                </Link>
                            </li>
                            <li data-aos="fade-up">
                                <Link to="/news/newsDetails">
                                    <div className={style.pic}><img src={n5} alt="" /></div>
                                    <div className={style.con}>
                                        <p className={style.title}>中国三大名酒剑南春亮相世界三大地标，携手
                                    潘基文、福布斯为中国文化点赞！</p>
                                        <p className={style.date}>2019.08.07</p>
                                    </div>
                                </Link>
                            </li>
                            <li data-aos="fade-up">
                                <Link to="/news/newsDetails">
                                    <div className={style.pic}><img src={n6} alt="" /></div>
                                    <div className={style.con}>
                                        <p className={style.title}>中国三大名酒剑南春亮相世界三大地标，携手
                                    潘基文、福布斯为中国文化点赞！</p>
                                        <p className={style.date}>2019.08.07</p>
                                    </div>
                                </Link>
                            </li>
                            <li data-aos="fade-up">
                                <Link to="/news/newsDetails">
                                    <div className={style.pic}><img src={n7} alt="" /></div>
                                    <div className={style.con}>
                                        <p className={style.title}>中国三大名酒剑南春亮相世界三大地标，携手
                                    潘基文、福布斯为中国文化点赞！</p>
                                        <p className={style.date}>2019.08.07</p>
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