import style from './style.scss';
import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const l1 = require("./images/l1.png");
const l2 = require("./images/l2.png");
const l3 = require("./images/l3.png");
const l4 = require("./images/l4.png");
const l5 = require("./images/l5.png");

export default class Brew extends Component {

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
                <div className={style.brewing}>
                    <div className={style.wrap}>
                        <p className={style.title} data-aos="fade-up">传统酿造工艺</p>
                        <ul className={style.list + " clearfix"}>
                            <li>
                                <div className={style.ww}>
                                    <div className={style.pic} data-aos="fade-up">
                                        <img src={l1} alt="" />
                                        <p className={style.name}>“天益老号”老窖池</p>
                                    </div>
                                    <div className={style.txts} data-aos="fade-up" data-aos-duration="2000" data-aos-offset="0" data-aos-delay="0" >
                                        <p>窖龄越长，其香越幽，其味越正，其品越高。</p>
                                        <p>剑南春酒利用1500多年来一直沿用至今的“天益老号”古老窖池群酿造,</p>
                                        <p>对剑南春基础酒的品质起着关键的保证作用。</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className={style.ww}>
                                    <div className={style.pic} data-aos="fade-up">
                                        <img src={l2} alt="" />
                                        <p className={style.name}>精选五粮酿造</p>
                                    </div>
                                    <div className={style.txts} data-aos="fade-up" data-aos-duration="2000" data-aos-offset="0" data-aos-delay="0" >
                                        <p>剑南春甄选川西土地上</p>
                                        <p>“高粱、大米、糯米、小麦、玉米”五种优质粮食为原料，</p>
                                        <p>按祖传秘方科学配比，发挥五粮独特酿造优势，成就经典纯粮滋味。</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div className={style.bigitem}>
                            <div className={style.pic} data-aos="fade-right">
                                <img src={l3} alt="" />
                            </div>
                            <div className={style.txts} data-aos="fade-left">
                                <div className={style.ww}>
                                    <p className={style.name}>独特的制曲模式</p>
                                    <div className={style.state}>
                                        <p>剑南春酿酒使用是独特品种的曲。</p>
                                        <p>在酿酒发酵过程中微生物会代谢出更多的微量香味物质和有益于人体健康的微量健康因子。</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ul className={style.list + " clearfix"}>
                            <li>
                                <div className={style.ww}>
                                    <div className={style.pic} data-aos="fade-up">
                                        <img src={l4} alt="" />
                                        <p className={style.name}>独创的经典工艺</p>
                                    </div>
                                    <div className={style.txts} data-aos="fade-up" data-aos-duration="2000" data-aos-offset="0" data-aos-delay="0" >
                                        <p>剑南春的酿造独创了中国传统浓香型白酒生产的经典特色工艺——</p>
                                        <p><span>“一低、二长、三高、四适当、五精作”</span>的独特工艺技术。</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className={style.ww}>
                                    <div className={style.pic} data-aos="fade-up">
                                        <img src={l5} alt="" />
                                        <p className={style.name}>陶坛贮存老熟</p>
                                    </div>
                                    <div className={style.txts} data-aos="fade-up" data-aos-duration="2000" data-aos-offset="0" data-aos-delay="0" >
                                        <p>剑南春酒采用中国白酒老熟的最佳存贮容器——<span>陶坛储存老熟</span>。</p>
                                        <p> 酒中幽雅芬芳的陈香滋味也随贮存时间的增加而更加突出，滋味就更加悠美、绵柔</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
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