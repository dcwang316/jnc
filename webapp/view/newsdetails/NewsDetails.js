import style from './style.scss';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const qzon = require("./images/qzon.png");
const wb = require("./images/wb.png");
const wx = require("./images/wx.png");
// const video = require("./images/jnc.mp4");
import { ajaxAPI } from 'util/ajaxFunc';
import { getUrlParams } from 'util/tool';

export default class NewsDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            msg: {},
            others: {},
        }
    }

    onSearch = (id) => {
        ajaxAPI("/jnc/news/select/" + id).done(({ rspCode, data }) => {
            if (rspCode === '000000') {
                this.setState({
                    msg: data
                }, () => {
                    // $('video').on('loadeddata', function (e) {
                    //     let scale = 0.5, video = e.target,
                    //         canvas = document.createElement("canvas");
                    //     canvas.width = video.videoWidth * scale;
                    //     canvas.height = video.videoHeight * scale;
                    //     canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
                    //     video.setAttribute("poster", canvas.toDataURL("image/png"));
                    // })
                })
            }
        });
        ajaxAPI("/jnc/news/selectPreviousNext/" + id).done(({ rspCode, data }) => {
            if (rspCode === '000000') {
                this.setState({
                    others: data
                })
            }
        });
    }

    componentDidMount() {
        this.props.history.listen(() => {
            document.documentElement.scrollTop = document.body.scrollTop = 0;
        });
        let { id } = getUrlParams(window.location.search);
        this.onSearch(id);
    }

    componentWillReceiveProps(newProps) {
        let { id } = getUrlParams(newProps.location.search);
        this.onSearch(id);
    }

    render() {
        let { msg: { title, publishTime, visitors, source, details = '' }, others: { previous = {}, next = {} } } = this.state;
        details = details.replace(/\"none\"/g, "\"auto\"");
        return (
            <div>
                <div className={style.newsdetail}>
                    <div className={style.wrap}>
                        <p className={style.title}>{title}</p>
                        <div className={style.subtitle}>
                            <span>更新时间：{publishTime}</span>
                            <span>浏览次数：{visitors}</span>
                            <span>来源：{source}</span>
                        </div>
                        {/* <div className={style.video}><video src={video} controls="controls" style={{ width: "100%" }}></video></div> */}
                        <div className={style.detail} dangerouslySetInnerHTML={{
                            __html: details
                        }}>
                            {/* <p>导语：中国名酒剑南春拥有着较高的品牌价值和良好的消费者口碑，这一方面源于剑南春酒始终如一的优秀品质，一方面源于剑南春始终把
                                消费者放在第一位的优秀传统。剑南春环球文化之旅南极站完美收官，正是剑南春对消费者的又一次倾情回馈，获得一致好评！
                    <br /><br />
                                跨界多元延展 品牌活动有新意
                                由剑南春总冠名，腾讯新闻出品的大型探险类纪录片《探秘行星地球》南极篇正在热播之中。
                                据了解，除了著名音乐人老狼、张玮玮，知名青年演员窦骁，极地专家Martin
                                Enckell、旅行专题摄影师陈帅等网络达人，剑南春还邀请了100位幸运消费者，一起前往人类秘境、纯净南极，倾听
                                最动人的声音，寻找最绝美的风景，并见证限量款新品“南极之心”的发布。
                    <br /><br />
                                别于白酒企业传统的节目冠名方式和单纯的口号植入，剑南春此次环球文化之旅南极站活动可谓是跨界多元延展，将综艺节目
                                、消费者互动、产品设计等多种元素融为一体，建构从线上网综到线下宴会，品牌宣传到市场落地的完美闭环。从活动效果和消费者评价来看，剑南春本次的多元跨界
                                营销在业界实属一次颇受好评的创新尝试。
                            </p> */}

                        </div>
                        <div className={style.social_share + " social-share"} data-initialized="true"
                            data-url="http://www.baidu.com?(要分享的链接)" data-title="要分享的标题（可选）">
                            分享到：
                            <a className={style.icon_qzone + " icon-qzone"}><img src={qzon} alt="" /></a>
                            <a className={style.icon_weibo + " icon-weibo"}><img src={wb} alt="" /></a>
                            <a className={style.icon_wechat + " icon-wechat"}><img src={wx} alt="" /></a>
                        </div>
                        <div className={style.switch}>
                            {previous ? <Link to={`${process.env.ROUTE_PREFIX}/news/newsDetails?id=${previous.id}`}>上一篇：{previous.title}</Link> : <a>上一篇：已是第一篇了</a>}
                            {next ? <Link to={`${process.env.ROUTE_PREFIX}/news/newsDetails?id=${next.id}`}>下一篇：{next.title}</Link> : <a>下一篇：已是最后一篇了</a>}
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