import style from './style.scss';
import React, { Component } from 'react';
import { Modal } from 'antd';
import AOS from 'aos';
import 'aos/dist/aos.css';

const dyh = require('./images/dyh.jpg');
const weibo = require('./images/weibo.png');
const douyin = require('./images/douyin.png');
const wxdy = require('./images/wxdy.png');
const wxfw = require('./images/wxfw.png');
const kfimg = require('./images/kf.png');

export default class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isShowDyh: false
        }
    }

    onShowDyh = () => {
        this.setState({
            isShowDyh: true
        })
    }

    onHideDyh = () => {
        this.setState({
            isShowDyh: false
        })
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
    }

    componentWillUnmount() {
        ud && ud.hidePanel();
    }

    render() {
        let { isShowDyh } = this.state;
        let { onShowDyh, onHideDyh } = this;
        return (
            <div className={style.contactus}>
                <div className={style.wrap}>
                    <p className={style.title} data-aos="fade-up">欢迎来到剑南春！</p>
                    <div className={style.state} data-aos="fade-up">
                        <p>我们致力于为您提供更优质的产品和更好的服务，如果您有任何需要，可以通过以下方式联系我们，我们会尽快给您回复！</p>
                    </div>
                    <div className={style.content + " clearfix"}>
                        <div className={style.left + " fl"}>
                            <ul>
                                <li data-aos="fade-up">
                                    <div className={style.ww + ' ' + style.ww2}>
                                        <p className={style.t1}>联系电话 </p>
                                        <p>客户服务热线：400-977-7777</p>
                                        <p>总机电话：0838-6202206</p>
                                        <p>产品真假鉴定电话：0838-6202206-3444</p>
                                        <p>假冒产品举报电话：0838-6211311</p>
                                        <p>产品质量咨询：0838-6202206-3319</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className={style.left + " fl"}>
                            <ul>
                                <li data-aos="fade-up">
                                    <div className={style.ww}>
                                        <p className={style.t1}>公司地址 </p>
                                        <p>四川绵竹市春溢街289号</p>
                                    </div>
                                </li>
                                <li data-aos="fade-up">
                                    <div className={style.ww}>
                                        <p className={style.t1}>在线客服 </p>
                                        <p className={style.t2}>在线时间：周一~周六 9:00-12:00  14:30-18:00</p>
                                        <a className={style.btn} id="ontab" onClick={() => {
                                            ud && ud.showPanel();
                                        }}><img src={kfimg} /> 在线咨询</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className={style.right}>
                            <div className={style.weibo} data-aos="fade-up">
                                <a href="https://weibo.com/p/1006063921129720/home" target="_blank">
                                    <img src={weibo} alt="" />
                                    <span>官方微博：剑南春</span>
                                </a>
                                <a onClick={onShowDyh}>
                                    <img src={douyin} alt="" />
                                    <span>官方抖音：剑南春</span>
                                </a>
                            </div>
                            <div className={style.code + " clearfix"} data-aos="fade-up">
                                <div className={style.img}>
                                    <img src={wxdy} />
                                    <p>剑南春微信订阅号</p>
                                </div>
                                <div className={style.img}>
                                    <img src={wxfw} />
                                    <p>剑南春微信服务号</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    isShowDyh ?
                        <Modal closable={false} visible={true} footer={null} width={500} onCancel={onHideDyh}>
                            <div className={style.modelcontent}>
                                <img src={dyh} alt="" />
                                <p>扫码可以关注剑南春抖音官方号</p>
                            </div>
                        </Modal>
                        : null
                }
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