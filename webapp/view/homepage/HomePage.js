import style from './style.scss';
import './style.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input } from 'antd';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import Swiper from 'swiper';
import 'style/swiper.min.css';

import { ajaxAPI } from 'util/ajaxFunc';
const imgUrl = 'http://jnc.quduoduo.cc/files/';

import Index from 'index/Index';
import Footer from 'footer/Footer';
import Activity from 'activity/Activity';
import Product from 'product/Product';
import Series from 'series/Series';
import ProductDetails from 'productdetails/ProductDetails';
import News from 'news/News';
import Newslist from 'newslist/Newslist';
import NewsDetails from 'newsdetails/NewsDetails';
import Nature from 'technology/nature/Nature';
import Development from 'technology/development/Development';
import Brew from 'technology/brew/Brew';
import About from 'about/About';
import Security from 'security/Security';
import Join from 'join/Join';
import Shop from 'shop/Shop';
import Contact from 'contact/Contact';
import Recruit from 'recruit/Recruit';
import RecruitDetails from 'recruitDetails/RecruitDetails';
import Museum from 'history/museum/Museum';
import Honor from 'history/honor/Honor';
import Origin from 'history/origin/Origin';
import Culture from 'history/culture/Culture';

const logo = require('./images/logo.png');
const nimg = require('./images/nimg.png');
const search = require('./images/search.png');
// const jd = require('./images/jd.png');
// const tmall = require('./images/tmall.png');
const navimg = require('./images/navimg.png');

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [],
            lanmus: [{ id: '' }]
        };
    }
    componentDidMount() {
        // $('.shb').click(function (e) {
        //     e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
        //     $(this).next().slideToggle();
        //     $('.searchkeybox').slideUp();
        // });
        // 搜索框
        $('.seb').click(function (e) {
            e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
            $('.searchkeybox').slideToggle();
            $('.spls').slideUp();
        });
        $('.searchkeybox').click(function (e) {
            e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
        })
        $(document).click(function (e) {
            $('.searchkeybox').slideUp();
            $('.spls').slideUp();
        });

        ajaxAPI('/jnc/product/series/all').done(({ rspCode, data }) => {
            if (rspCode === '000000') {
                this.setState({
                    series: data
                }, () => {
                    new Swiper('.navswiper', {
                        slidesPerView: 'auto',
                        spaceBetween: 30,
                        navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                            hideOnClick: true,
                            disabledClass: 'disabled',
                        },
                    });
                    let prevSrc = '';
                    $(".swiper-wrapper a img").hover(function () {
                        prevSrc = $(this).attr('src');
                        $(this).attr("src", $(this).data('hover'));
                    }, function () {
                        $(this).attr("src", prevSrc);
                    });
                })
            }
        });

        ajaxAPI('/jnc/active/policy/all').done(({ rspCode, data }) => {
            if (rspCode === '000000') {
                this.setState({
                    lanmus: data.map((o) => ({ id: o.id, src: o.columnImage, name: o.columnName }))
                })
            }
        });
    }

    render() {
        let { series, lanmus } = this.state;
        const onGetActivity = (match, location) => {
            if (location.pathname !== '/activity') {
                return false
            } else {
                return true;
            }
        };
        return (
            <div className={style.home}>
                <Router>
                    <div>
                        <div className={style.header}>
                            <div className={style.wrap + " clearfix"}>
                                <a className={style.logo + " fl"} href="/"><img src={logo} alt="" /></a>
                                <ul className={style.nav + " fr clearfix"}>
                                    <li>
                                        <NavLink exact to={`${process.env.ROUTE_PREFIX}/`} className={style.item} activeClassName={style.activeLink}>
                                            首页
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink isActive={onGetActivity} to={`${process.env.ROUTE_PREFIX}/activity?id=${lanmus[0].id}`} className={style.item} activeClassName={style.activeLink}>
                                            回馈活动
                                        </NavLink>
                                        <div className={style.subnav}>
                                            {
                                                lanmus.map((o) => (
                                                    <Link key={o.id} to={`${process.env.ROUTE_PREFIX}/activity?id=${o.id}`}><img src={imgUrl + o.src} alt="" /></Link>
                                                ))
                                            }
                                        </div>
                                    </li>
                                    <li>
                                        <NavLink to={`${process.env.ROUTE_PREFIX}/product`} className={style.item} activeClassName={style.activeLink}>
                                            产品中心
                                        </NavLink>
                                        <div className={style.subnav + " sssub " + style.small}>
                                            <div className={style.subwrap + ' navswiper'}>
                                                <div className={style.wwflex + " swiper-wrapper"}>
                                                    {
                                                        series.map((o, i) => (
                                                            <div className={style.slideitem + " swiper-slide"} key={i}>
                                                                <Link to={`${process.env.ROUTE_PREFIX}/series?id=${o.id}&img=${o.banner}`}><img data-hover={imgUrl + o.bannerHover} src={imgUrl + o.src} alt="" /></Link>
                                                            </div>))
                                                    }
                                                </div>
                                            </div>
                                            <div className={style.prev + " swiper-button-prev"}></div>
                                            <div className={style.next + " swiper-button-next"}></div>
                                        </div>
                                    </li>
                                    <li>
                                        <NavLink to={`${process.env.ROUTE_PREFIX}/history`} className={style.item} activeClassName={style.activeLink}>
                                            历史文化
                                        </NavLink>
                                        <div className={style.subnav}>
                                            <img src={nimg} alt="" />
                                            <Link to={`${process.env.ROUTE_PREFIX}/history/origin`}>历史渊源</Link>
                                            <Link to={`${process.env.ROUTE_PREFIX}/history/culture`}>天益老号</Link>
                                            <Link to={`${process.env.ROUTE_PREFIX}/history/honor`}>企业荣誉</Link>
                                            <Link to={`${process.env.ROUTE_PREFIX}/history/museum`}>博物馆</Link>
                                        </div>
                                    </li>
                                    <li>
                                        <NavLink to={`${process.env.ROUTE_PREFIX}/technology`} className={style.item} activeClassName={style.activeLink}>
                                            工艺优胜
                                        </NavLink>
                                        <div className={style.subnav}>
                                            <img src={navimg} alt="" />
                                            <Link to={`${process.env.ROUTE_PREFIX}/technology/nature`}>自然美景</Link>
                                            <Link to={`${process.env.ROUTE_PREFIX}/technology/Brew`}>酿造工艺</Link>
                                            <Link to={`${process.env.ROUTE_PREFIX}/technology/development`}>传承发展</Link>
                                        </div>
                                    </li>
                                    <li>
                                        <NavLink to={`${process.env.ROUTE_PREFIX}/news`} className={style.item} activeClassName={style.activeLink}>
                                            新闻资讯
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={`${process.env.ROUTE_PREFIX}/about`} className={style.item} activeClassName={style.activeLink}>
                                            关于我们
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className={style.links}>
                                {/* <div className={style.shoplist}>
                                    <span className={style.shopbtn + " shb"} href="">剑南春商城</span>
                                    <div className={style.list + ' spls'}>
                                        <a href="https://mall.jd.com/index-55944.html" target="_blank"><img src={jd} alt="" /> 京东</a>
                                        <a href="https://jiannanchun.tmall.com/" target="_blank"><img src={tmall} alt="" /> 天猫</a>
                                    </div>
                                </div> */}
                                <span className={style.searchbtn + " seb"} href=""><img src={search} alt="" /></span>
                                <span className={style.languagebtn} href="">EN</span>
                            </div>
                            <div className={style.searchbox + " searchkeybox"}>
                                <div className={style.search}>
                                    <Input type="text" placeholder="请输入关键字" />
                                    <button></button>
                                </div>
                            </div>
                        </div>
                        <Route exact path={`${process.env.ROUTE_PREFIX}/`} component={Index} />
                        <Route exact path={`${process.env.ROUTE_PREFIX}/activity`} component={Activity} />
                        <Route exact path={`${process.env.ROUTE_PREFIX}/product`} component={Product} />
                        <Route exact path={`${process.env.ROUTE_PREFIX}/series`} component={Series} />
                        <Route exact path={`${process.env.ROUTE_PREFIX}/productdetails`} component={ProductDetails} />
                        <Route exact path={`${process.env.ROUTE_PREFIX}/history`} component={Origin} />
                        <Route exact path={`${process.env.ROUTE_PREFIX}/history/origin`} component={Origin} />
                        <Route exact path={`${process.env.ROUTE_PREFIX}/history/culture`} component={Culture} />
                        <Route exact path={`${process.env.ROUTE_PREFIX}/history/honor`} component={Honor} />
                        <Route exact path={`${process.env.ROUTE_PREFIX}/history/museum`} component={Museum} />
                        <Route exact path={`${process.env.ROUTE_PREFIX}/news`} component={News} />
                        <Route exact path={`${process.env.ROUTE_PREFIX}/news/newslist`} component={Newslist} />
                        <Route exact path={`${process.env.ROUTE_PREFIX}/news/newsDetails`} component={NewsDetails} />
                        <Route exact path={`${process.env.ROUTE_PREFIX}/about`} component={About} />
                        <Route exact path={`${process.env.ROUTE_PREFIX}/security`} component={Security} />
                        <Route exact path={`${process.env.ROUTE_PREFIX}/join`} component={Join} />
                        <Route exact path={`${process.env.ROUTE_PREFIX}/shop`} component={Shop} />
                        <Route exact path={`${process.env.ROUTE_PREFIX}/contact`} component={Contact} />
                        <Route exact path={`${process.env.ROUTE_PREFIX}/recruit`} component={Recruit} />
                        <Route exact path={`${process.env.ROUTE_PREFIX}/recruit/recruitDetails`} component={RecruitDetails} />
                        <Route exact path={`${process.env.ROUTE_PREFIX}/technology`} component={Nature} />
                        <Route exact path={`${process.env.ROUTE_PREFIX}/technology/brew`} component={Brew} />
                        <Route exact path={`${process.env.ROUTE_PREFIX}/technology/nature`} component={Nature} />
                        <Route exact path={`${process.env.ROUTE_PREFIX}/technology/development`} component={Development} />

                        <Footer />
                    </div>
                </Router>
            </div>
        );
    }
}

export default connect()(HomePage);