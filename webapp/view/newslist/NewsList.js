import style from './style.scss';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import Pagecomponent from './Pagecomponent';

import { ajaxAPI } from 'util/ajaxFunc';
import { getUrlParams } from 'util/tool';

const tabes = [{
    name: '最新资讯',
    type: 3
}, {
    name: '公告公示',
    type: 2
}];

export default class NewsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataList: [],
            pageNo: 1,
            type: '',
            rowCount: 0,
            pageSize: 10
        };
    }

    onSearchData = (flag) => {
        let { pageNo, pageSize, type } = this.state;
        ajaxAPI("/jnc/news/page", { type, pageSize, pageNo }).done(({ rspCode, data }) => {
            if (rspCode === '000000') {
                if (flag) {
                    this.setState({
                        dataList: data.records,
                        rowCount: data.rowCount,
                    });
                    this.child.onResetParams();
                } else {
                    this.setState({
                        dataList: data.records,
                        rowCount: data.rowCount,
                    });
                }
            }
        })
    }

    componentDidMount() {
        this.props.history.listen(() => {
            document.documentElement.scrollTop = document.body.scrollTop = 0;
        });

        let { type } = getUrlParams(window.location.search);
        this.setState({ type }, this.onSearchData);
    }

    onChangeTab = (type) => {
        if (type !== this.state.type) {
            this.setState({ type, pageNo: 1 }, () => {
                this.onSearchData(true);
            });
        }
    }

    onPageChange = (pageNo) => {
        this.setState({ pageNo }, this.onSearchData);
    }

    parentControl = (child) => {
        this.child = child;
    }

    render() {
        let { dataList, type, rowCount } = this.state;
        let { onChangeTab, parentControl } = this;
        let isShow = type == 3;
        let ttClass = isShow ? style.zxname : style.ggname;
        return (
            <div>
                <div className={style.newsbox}>
                    <div className={style.wrap}>
                        <div className={style.newslist + ' clearfix'}>
                            <div className={style.leftnav}>
                                <p className={style.tt}>新闻资讯</p>
                                <ul className={style.mlist}>
                                    {
                                        tabes.map((o, i) => (
                                            <li key={i} onClick={() => { onChangeTab(o.type) }} className={o.type == type ? style.active : ''}>
                                                <a>{o.name}</a>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className={style.news_right}>
                                <ul className={style.list_wraper}>
                                    {
                                        dataList.map((o, i) => (
                                            <li key={i} className="clearfix">
                                                <div className={style.date}>
                                                    <p>{o.publishTime.substr(0, 4) + '.' + o.publishTime.substr(5, 2)}</p>
                                                    <p className={style.day}>{o.publishTime.substr(8)}</p>
                                                </div>
                                                <div className={style.texts}>
                                                    <p className={ttClass}>{o.title}</p>
                                                    {
                                                        isShow ? <div className={style.state}>
                                                            <p>{o.summary}</p>
                                                        </div> : ''
                                                    }
                                                    <Link className={style.more} to={`${process.env.ROUTE_PREFIX}/news/newsDetails?id=${o.id}`}>阅读详情</Link>
                                                </div>
                                            </li>
                                        ))
                                    }
                                    {/* <li className="clearfix">
                                        <div className={style.date}>
                                            <p>2019.12</p>
                                            <p className={style.day}>25</p>
                                        </div>
                                        <div className={style.texts}>
                                            <p className={style.name}>剑南春带100名消费者探秘南极，新品“南极之心”震撼首发</p>
                                            <div className={style.state}>
                                                <p>由剑南春总冠名，腾讯新闻出品的大型探险类纪录片《探秘行星地球》南极篇正在热播之中。据了解，影师陈帅等网络达人剑南春还邀请了，由</p>
                                            </div>
                                            <a className={style.more}>阅读详情</a>
                                        </div>
                                    </li>
                                    <li className="clearfix">
                                        <div className={style.date}>
                                            <p>2019.12</p>
                                            <p className={style.day}>25</p>
                                        </div>
                                        <div className={style.texts}>
                                            <p className={style.name}>剑南春带100名消费者探秘南极，新品“南极之心”震撼首发</p>
                                            <div className={style.state}>
                                                <p>由剑南春总冠名，腾讯新闻出品的大型探险类纪录片《探秘行星地球》南极篇正在热播之中。据了解，影师陈帅等网络达人剑南春还邀请了，由</p>
                                            </div>
                                            <a className={style.more}>阅读详情</a>
                                        </div>
                                    </li>
                                    <li className="clearfix">
                                        <div className={style.date}>
                                            <p>2019.12</p>
                                            <p className={style.day}>25</p>
                                        </div>
                                        <div className={style.texts}>
                                            <p className={style.name}>剑南春带100名消费者探秘南极，新品“南极之心”震撼首发</p>
                                            <div className={style.state}>
                                                <p>由剑南春总冠名，腾讯新闻出品的大型探险类纪录片《探秘行星地球》南极篇正在热播之中。据了解，影师陈帅等网络达人剑南春还邀请了，由</p>
                                            </div>
                                            <a className={style.more}>阅读详情</a>
                                        </div>
                                    </li> */}
                                </ul>
                                {
                                    rowCount ? <Pagecomponent {...{ parentControl, totalNums: rowCount, pageCallbackFn: this.onPageChange }} /> : ''
                                }
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
            </div >
        );
    }
}