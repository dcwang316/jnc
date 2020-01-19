import style from './style.scss';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import code from './images/code.png';
import jd from './images/jd.png';
import tmall from './images/tmall.png';

export default class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className={style.fcut}></div>
                <div className={style.footer}>
                    <NavLink exact to={`${process.env.ROUTE_PREFIX}/security`} className={style.item1} activeClassName={style.activeLink}>
                        防伪查询
                    </NavLink>
                    <NavLink exact to={`${process.env.ROUTE_PREFIX}/shop`} className={style.item2} activeClassName={style.activeLink}>
                        专卖店查询
                    </NavLink>
                    <NavLink exact to={`${process.env.ROUTE_PREFIX}/join`} className={style.item3} activeClassName={style.activeLink}>
                        招商加盟
                    </NavLink>
                    <NavLink exact to={`${process.env.ROUTE_PREFIX}/contact`} className={style.item4} activeClassName={style.activeLink}>
                        联系我们
                    </NavLink>
                    <a className={style.item6}>官方旗舰店
                        <div className={style.cart_show}>
                            <img onClick={() => { window.open("https://mall.jd.com/index-55944.html", "_blank") }} src={jd} alt="" />
                            <img onClick={() => { window.open("https://jiannanchun.tmall.com/", "_blank") }} src={tmall} alt="" />
                        </div>
                    </a>
                    <a className={style.item5}>
                        官方微信
                        <div className={style.code_show + " clearfix"}>
                            <div className={style.code}>
                                <img src={code} alt="" />
                                <p>剑南春微信订阅号</p>
                            </div>
                            <div className={style.code}>
                                <img src={code} alt="" />
                                <p>剑南春微信服务号</p>
                            </div>
                        </div>
                    </a>
                    <NavLink exact to={`${process.env.ROUTE_PREFIX}/recruit`} className={style.item7} activeClassName={style.activeLink}>
                        人才招聘
                    </NavLink>
                </div>
            </div>
        );
    }
}