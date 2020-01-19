import style from './style.scss';
import './style.css';
import React, { Component } from 'react';
import Swiper from 'swiper';
import { Spin } from 'antd';
import 'style/swiper.min.css';

const loadingimg = require('./images/loading.gif');

const f1 = require('./images/f1.png');
const f2 = require('./images/t2.png');
const f3 = require('./images/t3.png');
const f4 = require('./images/f4.png');
const f5 = require('./images/f5.png');
const f6 = require('./images/f6.png');
const fi1 = require('./images/fi1.png');
const fi2 = require('./images/fi2.png');

let hasMoved = false;

import { ajaxAPI } from 'util/ajaxFunc';
const imgUrl = 'http://jnc.quduoduo.cc/files/';

export default class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            banners: [],
            activity: [],
            loading: false,
            LLoaded: false,
            RLoaded: false,
            onloaded: false
        }
    }

    componentDidMount() {
        this.props.history.listen(() => {
            document.documentElement.scrollTop = document.body.scrollTop = 0;
        })
        new Swiper('.mainindex', {
            direction: 'vertical',
            mousewheel: true,
            speed: 500,
            observer: true,
        });

        this.setState({ loading: true });



        ajaxAPI("/jnc/home/banner/page", { type: 1, pageSize: 2 }).done(({ rspCode, data }) => {
            if (rspCode === '000000') {
                this.setState({
                    banners: data.records,
                    onloaded: true
                }, () => {

                    this.setState({ loading: false }, () => {
                        if (hasMoved) return false;

                        let Limg = new Image();
                        Limg.src = fi1;
                        Limg.className = 'leftimg';
                        let Rimg = new Image();
                        Rimg.src = fi2;
                        Rimg.className = 'rightimg';

                        Limg.onload = () => {
                            this.setState({
                                LLoaded: true
                            }, () => {
                                if (this.state.RLoaded) {
                                    $(".loadingPanel").remove();
                                    $('.firstopen').addClass('active');
                                    setTimeout(function () {
                                        $('.firstopen').remove();
                                    }, 3300);
                                }
                            })
                        };

                        Rimg.onload = () => {
                            this.setState({
                                RLoaded: true
                            }, () => {
                                if (this.state.LLoaded) {
                                    $(".loadingPanel").remove();
                                    $('.firstopen').addClass('active');
                                    setTimeout(function () {
                                        $('.firstopen').remove();
                                    }, 3300);
                                }
                            })
                        };

                        $(".firstopen").append(Rimg).append(Limg);
                    });

                    let mySwiper = new Swiper('.bannerwrap', {
                        // autoplay: true,
                        clickable: true,
                        loop: true, // 循环模式选项
                        pagination: {
                            el: '.bannerwrap .swiper-pagination',
                        },
                    });
                    $(".bannerwrap .swiper-slide").click(function () {
                        let url = $(this).data('jump');
                        window.open(url, '_blank');
                    })
                    mySwiper.el.onmouseover = function () {
                        mySwiper.autoplay.stop();
                    };
                    mySwiper.el.onmouseleave = function () {
                        mySwiper.autoplay.start();
                    };
                })
            }
        });

        ajaxAPI("/jnc/active/policy/selectTop").done(({ rspCode, data }) => {
            if (rspCode === '000000') {
                this.setState({
                    activity: data.length <= 0 ? {} : data[0]
                })
            }
        });
    }

    componentWillUnmount() {
        hasMoved = true;
    }

    render() {
        let { banners, loading, onloaded, activity: { id, backImage, backInfo = '', activities = [] } } = this.state;
        let styles = {};
        if (backImage) {
            styles = {
                backgroundImage: 'url(' + imgUrl + backImage + ')',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: '100% 100%'
            };
        }
        return (
            <div>
                <div className="mainindex">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className={style.banner_wrap}>
                                <div className={style.banner}>
                                    <Spin spinning={loading} style={{ height: '100%' }}>
                                        <div className="bannerwrap">
                                            <div className="swiper-wrapper">
                                                {
                                                    banners.map((o, i) => {
                                                        if (o.src.includes('.mp4')) {
                                                            return (<div className="swiper-slide" data-jump={o.jumpSrc} key={i} >
                                                                <video src={imgUrl + o.src} autoPlay="autoplay" style={{ height: "100%", background: '#000' }}>
                                                                    您的浏览器不支持 video 标签。
                                                            </video>
                                                            </div>)
                                                        } else {
                                                            return (<div data-jump={o.jumpSrc} key={i} className="swiper-slide" style={{ backgroundImage: "url(" + imgUrl + o.src + ")" }}>
                                                            </div>)
                                                        }
                                                    }
                                                    )
                                                }
                                            </div>
                                            <div className="swiper-pagination"></div>
                                        </div>
                                    </Spin>
                                </div>
                            </div>
                        </div>
                        <div className={style.mbox_wrap2 + " swiper-slide"}>
                            <div className={style.wenhua_wrap0} style={styles}>
                                <div className={style.wenhua}>
                                    <p className={style.size1}>{backInfo.indexOf('，') !== -1 ? backInfo.substr(0, backInfo.indexOf('，')) : backInfo}</p>
                                    <p className={style.size2}>{backInfo.indexOf('，') !== -1 ? backInfo.substr(backInfo.indexOf('，') + 1) : ''}</p>
                                    <div className={style.wenhua_imgs}>
                                        <div className={style.wenhua_wrap}>
                                            {
                                                activities.slice(0, 4).map((o, i) => (
                                                    <div className={style.img_item} key={i} onClick={() => { this.props.history.push(`${process.env.ROUTE_PREFIX}/activity?id=${id}`) }}>
                                                        <div className={style.img_wrap}><img src={imgUrl + o.image} /></div>
                                                        <div className={style.title}>{o.title}</div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mbox_wrap3 swiper-slide">
                            <div className={style.mainbox3}>
                                <div className={style.boxwrap}>
                                    <div className={style.list}>
                                        <div className={style.ww}>
                                            <div className={style.pic}><img src={f1} /><div className={style.imgbg}></div></div>
                                            <div className={style.con}>
                                                <p className={style.tt1}>浓香</p>
                                                <p className={style.tt2}>取天地精华，酿中国正宗五粮浓香白酒</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.list + ' ' + style.list_width}>
                                        <div className={style.ww}>
                                            <div className={style.pic}><img src={f2} /><div className={style.imgbg}></div></div>
                                            <div className={style.con}>
                                                <p className={style.tt1}>御酒</p>
                                                <p className={style.tt2}>载入正史至今尚存的唐代宫廷御酒</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.list}>
                                        <div className={style.ww}>
                                            <div className={style.pic}><img src={f3} /><div className={style.imgbg}></div></div>
                                            <div className={style.con}>
                                                <p className={style.tt1}>匠心</p>
                                                <p className={style.tt2}>1500年匠心坚持 御酒品质始终如一</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.list + ' ' + style.list_width}>
                                        <div className={style.ww}>
                                            <div className={style.pic}><img src={f4} /><div className={style.imgbg}></div></div>
                                            <div className={style.con}>
                                                <p className={style.tt1}>名酒</p>
                                                <p className={style.tt2}>蝉联“中国名酒”称号，获多项国内外大奖</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.list}>
                                        <div className={style.ww}>
                                            <div className={style.pic}><img src={f5} /><div className={style.imgbg}></div></div>
                                            <div className={style.con}>
                                                <p className={style.tt1}>万吨</p>
                                                <p className={style.tt2}>拥有多个万吨级原酒陶坛贮存库</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.list}>
                                        <div className={style.ww}>
                                            <div className={style.pic}><img src={f6} /><div className={style.imgbg}></div></div>
                                            <div className={style.con}>
                                                <p className={style.tt1}>专利</p>
                                                <p className={style.tt2}>“挥发系数鉴别年份酒的方法”获国家发明专利</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="copyright index_f">
                                <a>四川剑南春(集团)有限责任公司</a>
                                &nbsp;&nbsp;All Rights Reserved&nbsp;&nbsp;
                                <a href="http://beian.miit.gov.cn/" target="_blank">蜀ICP备05018250号</a>&nbsp;&nbsp;
                                <img style={{ verticalAlign: 'top' }} src={require('style/ga.png')} width='14' height='14' />川公网安备
                                <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=51068302000111" target="_blank">51068302000111号</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ display: hasMoved || !onloaded ? 'none' : 'block' }} className="firstopen">
                </div>
                <div style={{ display: hasMoved ? 'none' : 'block' }} className="loadingPanel">
                    <img src={loadingimg} />
                </div>
            </div>
        );
    }
}