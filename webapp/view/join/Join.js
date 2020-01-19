import style from './style.scss';
import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { downloadLoadApply } from 'util/tool';

export default class Join extends Component {

    constructor(props) {
        super(props);
    }

    onDownLoad = () => {
        downloadLoadApply();
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

    render() {
        return (
            <div className={style.invest_join}>
                <div className={style.wrap}>
                    <p className={style.title} data-aos="fade-up">招商加盟</p>
                    <p className={style.subtitle} data-aos="fade-up">{<span>与我们一起创造美好的未来</span>}</p>
                    <div className={style.wbox + " " + style.wbox1}>
                        <p className={style.tt} data-aos="fade-up">剑南春专卖店申请须知：</p>
                        <ul className={style.list + " clearfix"}>
                            <li className="clearfix" data-aos="fade-up">
                                <span className={style.num}>1</span>
                                <div className={style.con}>
                                    <p className={style.t1}>投资咨询</p>
                                    <div className={style.brief}>
                                        <p>加盟者可以通过电话、传真、微信留言、填写申请表等方式向总部初步了解项目信息。</p>
                                    </div>
                                </div>
                            </li>
                            <li className="clearfix" data-aos="fade-up">
                                <span className={style.num}>2</span>
                                <div className={style.con}>
                                    <p className={style.t1}>实地考察</p>
                                    <div className={style.brief}>
                                        <p>加盟者到总部进行项目考察，参观门店、确认项目，提交申请。</p>
                                    </div>
                                </div>
                            </li>
                            <li className="clearfix" data-aos="fade-up">
                                <span className={style.num}>3</span>
                                <div className={style.con}>
                                    <p className={style.t1}>资格审核</p>
                                    <div className={style.brief}>
                                        <p>总部对加盟者进行审核，确认加盟者的合作资格。</p>
                                    </div>
                                </div>
                            </li>
                            <li className="clearfix" data-aos="fade-up">
                                <span className={style.num}>4</span>
                                <div className={style.con}>
                                    <p className={style.t1}>签订合同</p>
                                    <div className={style.brief}>
                                        <p>双方确认考察结果无争议，正式签订合同。</p>
                                    </div>
                                </div>
                            </li>
                            <li className="clearfix" data-aos="fade-up">
                                <span className={style.num}>5</span>
                                <div className={style.con}>
                                    <p className={style.t1}>缴纳费用</p>
                                    <div className={style.brief}>
                                        <p>加盟者按所选择的投资类型向总部交纳相关的费用。</p>
                                    </div>
                                </div>
                            </li>
                            <li className="clearfix" data-aos="fade-up">
                                <span className={style.num}>6</span>
                                <div className={style.con}>
                                    <p className={style.t1}>总部培训</p>
                                    <div className={style.brief}>
                                        <p>总部安排加盟者进行技术培训，管理培训，员工培训等。</p>
                                    </div>
                                </div>
                            </li>
                            <li className="clearfix" data-aos="fade-up">
                                <span className={style.num}>7</span>
                                <div className={style.con}>
                                    <p className={style.t1}>店面装修</p>
                                    <div className={style.brief}>
                                        <p>总部为加盟者提供装修指导与设计指导。</p>
                                    </div>
                                </div>
                            </li>
                            <li className="clearfix" data-aos="fade-up">
                                <span className={style.num}>8</span>
                                <div className={style.con}>
                                    <p className={style.t1}>货物配送</p>
                                    <div className={style.brief}>
                                        <p>总部对物料配送提供帮助。</p>
                                    </div>
                                </div>
                            </li>
                            <li className="clearfix" data-aos="fade-up">
                                <span className={style.num}>9</span>
                                <div className={style.con}>
                                    <p className={style.t1}>试营业</p>
                                    <div className={style.brief}>
                                        <p>总部协助加盟者试营业，提供营销方案、人员招聘，服务推广等。</p>
                                    </div>
                                </div>
                            </li>
                            <li className="clearfix" data-aos="fade-up">
                                <span className={style.num}>10</span>
                                <div className={style.con}>
                                    <p className={style.t1}>正式营业</p>
                                    <div className={style.brief}>
                                        <p>总部持续关注加盟者的经营情况，并给予经营指导与帮助。</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className={style.listwrap + " clearfix"}>
                        <div className={style.wbox2} data-aos="fade-up">
                            <div className={style.ww}>
                                <p className={style.ss}>联系方式</p>
                                <div className={style.infos}>
                                    <p>联系电话：0838-6220174 苟小姐</p>
                                    <p>地址：四川·绵竹·春溢街52号</p>
                                    <p>四川绵竹剑南春酒类经营公司专卖店事业部</p>
                                </div>
                            </div>
                        </div>
                        <div className={style.wbox2} data-aos="fade-up">
                            <div className={style.ww}>
                                <p className={style.ss}>申请加盟</p>
                                <div className={style.infos}>
                                    <p>下载剑南春专卖店特许加盟申请表按表内要求发送邮件申请加盟</p>
                                </div>
                                <div className={style.btns}>
                                    <a>点击下载</a>
                                    <a className={style.on} onClick={this.onDownLoad}>剑南春专卖店特许加盟申请表</a>
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