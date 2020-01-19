import style from './style.scss';
import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const tl1 = require("./images/tl1.png");
const tl2 = require("./images/tl2.png");
const ty1 = require("./images/ty1.png");
const ty2 = require("./images/ty2.png");

export default class Culture extends Component {

    constructor(props) {
        super(props);
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
        })
    }

    render() {
        return (
            <div>
                <div className={style.timebrand}>
                    <div className={style.tbox1}>
                        <p className={style.title} data-aos="fade-up">剑南春·天益老号</p>
                        <p className={style.tt} data-aos="fade-up">1500 年不断代酿造，中国最古老的白酒窖池</p>
                        <div className={style.brief} data-aos="fade-up">
                            <p> 天益老号是剑南春酒坊遗址中的一处，入选中国考古界最权威的评选活动“2004年全国十大考古新发现”，并被列入全国重点文物保护</p>
                            <p>单位。剑南春酒坊遗址能获得考古界的“顶级认证”，意味着中国考古学掀开了重视工业文明研究的崭新篇章，也折射出剑南春自身深</p>
                            <p>厚文化的积淀。时至今日，“天益老号”仍一直为剑南春酿造着琼浆玉液。</p>
                        </div>
                    </div>
                    <div className={style.tbox2}>
                        <div className={style.wrap}>
                            <p className={style.title} data-aos="fade-up">规模宏大，业内罕见</p>
                            <ul className={style.list}>
                                <li data-aos="fade-up">
                                    <p className={style.t1}>长度</p>
                                    <div className={style.num}>
                                        <span className={style.nn}>500</span>
                                        <div className={style.ts}>
                                            <p>+</p>
                                            <p>米</p>
                                        </div>
                                    </div>
                                </li>
                                <li data-aos="fade-up">
                                    <p className={style.t1}>宽度</p>
                                    <div className={style.num}>
                                        <span className={style.nn}>240</span>
                                        <div className={style.ts}>
                                            <p>+</p>
                                            <p>米</p>
                                        </div>
                                    </div>
                                </li>
                                <li data-aos="fade-up">
                                    <p className={style.t1}>总面积</p>
                                    <div className={style.num}>
                                        <span className={style.nn}>120,000</span>
                                        <div className={style.ts}>
                                            <p>+</p>
                                            <p>米2</p>
                                        </div>
                                    </div>
                                </li>
                                <li data-aos="fade-up">
                                    <p className={style.t1}>古窖池</p>
                                    <div className={style.num}>
                                        <span className={style.nn}>695</span>
                                        <div className={style.ts}>
                                            <p className={style.none}>no</p>
                                            <p>条</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div className={style.state} data-aos="fade-up">
                                <p>剑南春酒坊遗址位于绵竹城关外西的诸葛祠、茶盘街、棋盘街和滚子坡两侧，由西北向东南呈一线分布。西北起自诸葛祠，东南抵至王麻巷口，长约500余米，宽
                                    约240余米，总面积约120，000平方米 。从五路口至棋盘街南端王麻巷口，长约260米、宽240米的范围内，既是清代酿酒作坊区，也是现在剑南春酒
                        厂的第一生产区。在剑南春“天益老号”古酒坊周围，明清遗存至今连续使用的古窖池有 695 条，面积达 6万平方米，规模之巨在全行业绝无仅有。</p>
                                <br />
                                <p>大规模的古窖池群为这一区域形成了独特物环境——它是剑南春酒品质高贵的保证，更是干年酒文化传承的见证。</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.tbox3}>
                        <div className={style.wrap}>
                            <div className={style.bg1}><img src={tl1} alt="" /></div>
                            <div className={style.bg2}><img src={tl2} alt="" /></div>
                            <div className={style.content}>
                                <div className={style.list} data-aos="fade-up">
                                    <div className={style.txts}>
                                        <p className={style.tt}>保存完整，无可比拟</p>
                                        <div className={style.state}>
                                            <p>“天益老号”酿酒作坊是我省唯一保存最为完整的并且仍在生产的传统酿酒作坊，被认定为全国重点文物保护单位，入围世界文化遗产预备名单。 </p>
                                            <br />
                                            <p>传延下来的天益老号里的酿酒作业还是纯粹的手工操作，这里的酿酒师傅们用着古老而传统的生产工具——酒甑、云盘、
                                                鸡公车、晒笆、黄桶……其中尚有清代酿酒用水井一处，明代水缸一件，清代大曲坊木质吊牌、木匾等。两个年度发掘的遗迹现
                                                象包括晾房1座、水井1口酒窖7组共26口、炉灶5座、晾堂2座、水沟2条、池子2个盛酒坑1个以及路基、柱础和墙基等。这些保
                                    存完好的传统酿造工具有些仍然运用在现代剑南春的酿造过程中可以说，天益老号的完整性是国内众多所谓的古窖池都无法比拟的。</p>
                                        </div>
                                    </div>
                                    <div className={style.img}><img src={ty1} alt="" /></div>
                                </div>
                                <div className={style.list} data-aos="fade-up">
                                    <div className={style.img2}>
                                        <img src={ty2} alt="" />
                                        <p className={style.wz}><span>【南宋纪年砖】</span>长：31cm &nbsp; 宽：19cm &nbsp; 厚：5.5cm</p>
                                    </div>
                                    <div className={style.txts + " " + style.txts2}>
                                        <p className={style.tt}>历史悠久，生生不息</p>
                                        <div className={style.state}>
                                            <p>1985年6月6日，天益老号出土了一块砖，考古学家称之为“南齐纪年砖”。它对于绵竹酒坊建造历史的考证有着重要的借鉴作用，而天益老号因为岁月的沉淀，愈加显得厚重。 </p>
                                            <br />
                                            <p>至光绪年间，朱氏酿酒作坊已传至其后代朱天益经营，因此更名为“天益老号”。300余年来，其生产所用窖池一直进
                                                行着不间断发酵。窖龄越长，其香越幽，其味越正，其品越高。
                                                时至今日，天益老号仍然生生不息地酿造，为剑南春出产着传世
                                                美酒，延续着千百年前的美酒传奇。剑南春酒利用1500多年来一直沿用至今的“天益老号”古老窖池群酿造，
                                                对剑南春基础酒的品质起着关键的保证作用。
                                            </p>
                                        </div>
                                    </div>
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
            </div >
        );
    }
}