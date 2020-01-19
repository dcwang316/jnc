import style from './style.scss';
import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const m1 = require("./images/m1.png");
const m2 = require("./images/m2.png");
const m3 = require("./images/m3.png");
const m4 = require("./images/m4.png");
const m5 = require("./images/m5.png");
const m6 = require("./images/m6.png");

export default class Development extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.history.listen(() => {
            document.documentElement.scrollTop = document.body.scrollTop = 0;
        });
        setTimeout(function () {
            AOS.init({
                offset: 200,
                duration: 1000,
                easing: 'ease',
                delay: 100,
                once: 'true'
            })
        }, 600)
    }

    render() {
        return (
            <div>
                <div className={style.development}>
                    <div className={style.dbox1}>
                        <div className={style.wrap}>
                            <p className={style.title} data-aos="fade-up">名酒研究中心</p>
                            <div className={style.subtitle} data-aos="fade-up">
                                <p>科研力量是品质常新、企业长胜的核心动力。</p>
                                <p>雄厚的技术力量和世界一流的科研设备保证了每一滴剑南春年份酒的精良品质。</p>
                            </div>
                            <div className={style.img} data-aos="fade-up">
                                <img src={m1} alt="" />
                            </div>
                            <ul className={style.list}>
                                <li data-aos="fade-up" data-aos-duration="3000" data-aos-offset="0" data-aos-delay="0" >
                                    <div className={style.num}>
                                        <span className={style.nn}>30</span>
                                        <div className={style.tt}>
                                            <p>+</p>
                                            <p>years</p>
                                        </div>
                                    </div>
                                    <div className={style.txts}>
                                        <p>30多年来，剑南春积极推进企业 </p>
                                        <p>科研工作向高层次、前瞻性发展。</p>
                                    </div>
                                </li>
                                <li data-aos="fade-up" data-aos-duration="3000" data-aos-offset="0" data-aos-delay="0" >
                                    <div className={style.num}>
                                        <span className={style.nn}>4</span>
                                        <div className={style.tt}>
                                            <p>+</p>
                                            <p>亿</p>
                                        </div>
                                    </div>
                                    <div className={style.txts}>
                                        <p>集团不断加大对科研力量投入，</p>
                                        <p> 科研装备投入已达4亿元。 </p>
                                    </div>
                                </li>
                                <li data-aos="fade-up" data-aos-duration="3000" data-aos-offset="0" data-aos-delay="0" >
                                    <div className={style.num}>
                                        <span className={style.nn}>30</span>
                                        <div className={style.tt}>
                                            <p>+</p>
                                            <p>项</p>
                                        </div>
                                    </div>
                                    <div className={style.txts}>
                                        <p>剑南春持续不断加大科研投入，</p>
                                        <p>科研装备投入已达4亿元。</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.dbox2}>
                        <div className={style.wrap}>
                            <p className={style.title} data-aos="fade-up">精英团队</p>
                            <div className={style.subtitle + " " + style.subtitle2} data-aos="fade-up">
                                <p>人才是企业之本，高素质、专业化科研人员团队是剑南春年份酒品质的坚实基础。</p>
                            </div>
                            <ul className={style.list + " clearfix"}>
                                <li data-aos="fade-up">
                                    <div className={style.ww}>
                                        <div className={style.pic}><img src={m2} alt="" /></div>
                                        <div className={style.con}>
                                            <div className={style.ll}>
                                                <p className={style.num}>600</p>
                                                <div className={style.tt}>
                                                    <p>+</p>
                                                    <p>名</p>
                                                </div>
                                            </div>
                                            <div className={style.txts}>
                                                <p>中级骨干技术人员600多人</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li data-aos="fade-up">
                                    <div className={style.ww}>
                                        <div className={style.pic}><img src={m3} alt="" /></div>
                                        <div className={style.con}>
                                            <div className={style.ll}>
                                                <p className={style.num}>60</p>
                                                <div className={style.tt}>
                                                    <p>+</p>
                                                    <p>位</p>
                                                </div>
                                            </div>
                                            <div className={style.txts}>
                                                <p>60多位白酒专家教授</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li data-aos="fade-up">
                                    <div className={style.ww}>
                                        <div className={style.pic}><img src={m4} alt="" /></div>
                                        <div className={style.con}>
                                            <div className={style.ll}>
                                                <p className={style.num}>267</p>
                                                <div className={style.tt}>
                                                    <p className={style.none}>+</p>
                                                    <p>道</p>
                                                </div>
                                            </div>
                                            <div className={style.txts}>
                                                <p>工序，每一道工序在生产中有严谨性</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.dbox3}>
                        <div className={style.wrap}>
                            <div className={style.left} data-aos="fade-up-right">
                                <p className={style.title}>曲药天书</p>
                                <p className={style.title2}>基因组技术 微生物天书</p>
                                <div className={style.subtitle}>
                                    <p>曲药依靠天然微生物接种制作而成，微生物群落的生命活动是形成白酒主体特质和微量滋味成份的关键因素。 </p>
                                    <p>新破解酿酒微生物群落这部天书，成功获得了不同贮存曲药及不同质量等级曲药微生物群落的结构及变化规律，为酿酒生产及进一步提高产品质量提供了有力保障。</p>
                                </div>
                            </div>
                            <div className={style.img} data-aos="fade-up-left"><img src={m5} alt="" /></div>
                        </div>
                    </div>
                    <div className={style.dbox4}>
                        <div className={style.wrap}>
                            <div className={style.img} data-aos="fade-up-right"><img src={m6} alt="" /></div>
                            <div className={style.right} data-aos="fade-up-left">
                                <p className={style.title}>太空窖泥 </p>
                                <div className={style.subtitle}>
                                    <p>2005年，中国第二十一颗返回式卫星搭载剑南春酒曲、窖泥，进行太空试验。从太空酒曲和太空窖泥中分离、纯化、培养出新型酿酒微生物，采用科
                                        学的方法将其应用于剑南春酿酒发酵过程，生成更多的特色物质以及有益于人体健康的生理活性物质，使剑南春的滋味特色更加突出。
                                    </p>
                                    <br />
                                    <p>剑南春利用“全自动微生物鉴定仪”结合“基因组技术”对剑南春天益老窖中功能菌株进行定性研究，发现剑南春老窖中存在特殊的功能菌株，经该设备定性为“耳蜗形梭菌”。这
                                        是中国酒类史上首次发现并命名浓香型酒主体香味物质的功能菌株，这为剑南
                                        春独特风味特征的形成奠定了基础。该成果荣获中国食品工业协会科学技术进步一等奖。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.dbox5}>
                        <div className={style.wrap}>
                            <p className={style.title} data-aos="fade-up">智能评价</p>
                            <div className={style.subtitle} data-aos="fade-up">
                                <p>世界酒类行业判断产品质量主要通用的传统方法是感官检测。感官鉴定“只可意会、不便言传”，从而造成酒质的不稳定。</p>
                                <br />
                                <p>剑南春以现代计算机网络为依托，研究制定出“名优白酒质量评价体系”：将专家的感官鉴定与酒中微量香味成份的科学测定有机结合，转化成高智能的评价体系。鉴定快速、
                                    方便、准确，确保了剑南春酒质评价的精确性和一致性。
                                </p>
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
                </div>
            </div >
        );
    }
}