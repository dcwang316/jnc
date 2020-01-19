import style from './style.scss';
import React, { Component } from 'react';
import Swiper from 'swiper';
import 'style/swiper.min.css';

const prev = require("./images/prev.png");
const next = require("./images/next.png");
const left = require("./images/left.png");
const right = require("./images/right.png");

import { ajaxAPI } from 'util/ajaxFunc';
const imgUrl = 'http://jnc.quduoduo.cc/files/';
let imgSwiper = null;

export default class Honor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            honnerObj: [],
            years: [],
            activeIndex: 0,
            marginTop: 0,
            showDateLen: 8,
        }
    }

    onSearchonner = (year) => {
        ajaxAPI("/jnc/history/selectByYear", { year }).done(({ rspCode, data }) => {
            if (rspCode === '000000') {
                this.setState({
                    honnerObj: data
                }, () => {
                    imgSwiper = new Swiper('.honorswiper', {
                        allowTouchMove: false,
                        pagination: {
                            el: '.honorswiper .swiper-pagination',
                            clickable: true,
                        },
                    });
                    $('.left_btn').click(function () {
                        imgSwiper.slidePrev();
                    });
                    $('.right_btn').click(function () {
                        imgSwiper.slideNext();
                    })
                })
            }
        })
    }

    onSearchByYear = (activeIndex, year) => {
        if (activeIndex === this.state.activeIndex) return false;
        this.setState({ activeIndex }, () => {
            ajaxAPI("/jnc/history/selectByYear", { year }).done(({ rspCode, data }) => {
                if (rspCode === '000000') {
                    this.setState({
                        honnerObj: data
                    }, () => {
                        imgSwiper.slideTo(0);
                        imgSwiper.updateSlides();
                        imgSwiper.pagination.update();
                    })
                }
            })
        })
    }

    up = () => {
        let { showDateLen } = this.state;
        if (showDateLen <= 8) return;
        showDateLen--;
        this.setState({
            showDateLen,
        }, () => {
            $(".moveu").animate({ 'marginTop': (8 - showDateLen) * 78.5 }, 300)
        })
    }

    down = () => {
        let { showDateLen, years } = this.state;
        if (showDateLen >= years.length) return;
        showDateLen++;
        this.setState({
            showDateLen,
        }, () => {
            $(".moveu").animate({ 'marginTop': (8 - showDateLen) * 78.5 }, 300)
        })
    }

    componentDidMount() {
        this.props.history.listen(() => {
            document.documentElement.scrollTop = document.body.scrollTop = 0;
        });
        ajaxAPI("/jnc/history/selectYears").done(({ rspCode, data }) => {
            if (rspCode === '000000') {
                let lastData = data.splice(data.length - 1, 1);
                data.reverse();
                data.push(...lastData);

                this.setState({
                    years: data
                }, () => {
                    this.onSearchonner(data[0]);
                })
            }
        })
    }

    render() {
        let { years, honnerObj, activeIndex } = this.state;
        let { onSearchByYear, up, down } = this;
        return (
            <div>
                <div className={style.honorwrap}>
                    <div className={style.wrap + " clearfix"}>
                        <div className={style.years + " fl"}>
                            <span className={style.btn + " " + style.prev} onClick={up} >
                                <img src={prev} alt="" />
                            </span>
                            <span className={style.btn + " " + style.next} onClick={down} >
                                <img src={next} alt="" />
                            </span>
                            <div className={style.yearswiper}>
                                <ul className='moveu'>
                                    {
                                        years.map((o, i) => (
                                            <li className={i === activeIndex ? style.active : ''} key={i} onClick={() => { onSearchByYear(i, o) }}>
                                                <span>{o}</span>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className={style.imgs}>
                            <div className={style.ww}>
                                <img src={left} className={style.leftimg + ' left_btn'} alt='' />
                                <img src={right} className={style.rightimg + ' right_btn'} alt='' />
                                <div className={style.honorimgs + ' honorswiper'}>
                                    <ul className="swiper-wrapper">
                                        {
                                            honnerObj.map((o, i) => (
                                                <li className="swiper-slide" key={i}>
                                                    <div className={style.img}><img src={imgUrl + o.images} alt="" /></div>
                                                    <p>{o.title}</p>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                    <div className={style.pagination + " swiper-pagination"}></div>
                                </div>
                            </div>
                        </div>
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