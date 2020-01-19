import style from './style.scss';
import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './style.css';

const shan = require("./images/shan.png");
const yuan2 = require("./images/yuan2.png");
const shui = require("./images/shui.png");
const pao = require("./images/pao.png");

export default class Nature extends Component {

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
                <div className={style.beautyview}>
                    <div className={style.vbox1}>
                        <div className={style.wrap}>
                            <div className={style.wz + " fl"} data-aos="fade-up">
                                <img src={shan} alt="" />
                            </div>
                            <div className={style.txts} data-aos="fade-up">
                                <p>绵竹，中国名酒剑南春的故乡，位于岷江流域</p>
                                <p>和金字塔、玛雅文明一样</p>
                                <p>坐落在“神秘的北纬30度”上</p>
                                <p>是“地球同纬度上最适合酿造优质蒸馏酒的生态区域”</p>
                                <p>北靠龙门山脉、南连成都平原</p>
                                <p>独特地势环境，丰富的地理跨度</p>
                                <p>赋予了剑南春丰厚的馈赠</p>
                                <p>剑南春的酿酒先人们正是在这样的馈赠之中</p>
                                <p>领悟出酿酒之道</p>
                                <p>也让这片土地陶醉在美酒的香浓浓香韵味之中</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.vbox2 + " clearfix"}>
                        <div className={style.content + " fr"}>
                            <div className={style.ww}>
                                <div className={style.timg} data-aos="fade-up"><img src={yuan2} alt="" /></div>
                                <div className={style.txts} data-aos="fade-up">
                                    <p>地处中国白酒金三角上游，绵竹的季风或是甘露，携带着青藏高原的第一股纯净，从这片土地上经过。这里的山之浑厚、水之圣洁，都被剑南春的美酒演绎得淋漓尽致。</p>
                                    <br />
                                    <p>正因承载了山水灵犀的原产地之美，剑南春美酒才有如此独特的品质，剑南春也以其独特的魅力，吸引并征服了众多的懂酒之人、爱酒之人。</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.vbox3}>
                        <div className={style.wrap + 'shui'} data-aos="fade-up">
                            <p className={style.timg} ><img src={shui} alt="" /></p>
                            <div className={style.txts} >
                                <p>“水乃酒之魂”是世界公认的酿酒谏言。</p>
                                <p>绵竹的水，是孕育剑南春最大的功臣之一。</p>
                                <p>九顶山的雪水经过层层渗透，汇聚于此，</p>
                                <p>带着地处上游的圣洁，安静从容地和几百万年前冰川时代的古老岩层、沙砾进行着矿物质交换，</p>
                                <p>形成品质卓越的天然弱碱性矿泉水，每一滴都富含</p>
                                <p>钙、锶、钠、钾等多种天然矿物精华和微量元素，</p>
                                <p>为剑南春美酒的酿造注入灵魂。</p>
                            </div>
                        </div>
                        <div className={style.pao + ' pao'} data-aos="fade-up" data-aos-duration="3000" data-aos-offset="0" data-aos-delay="0" ><img src={pao} alt="" /></div>
                    </div>
                </div>
            </div>
        );
    }
}