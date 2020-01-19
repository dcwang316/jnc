import style from './style.scss';
import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import si1 from "./images/si1.png";
import si2 from "./images/si2.png";
import si3 from "./images/si3.png";
import g1 from "./images/g1.png";
import g2 from "./images/g2.png";
import g3 from "./images/g3.png";
import g4 from "./images/g4.png";
import g5 from "./images/g5.png";
import g6 from "./images/g6.png";
import g7 from "./images/g7.png";
import g8 from "./images/g8.png";
import fw from "./images/fw.png";

const steps = [
    { index: "第一关", name: '防复印橘色' },
    { index: "第二关", name: '烫金徽标' },
    { index: "第三关", name: '热敏油墨' },
    { index: "第四关", name: '中文微缩字' },
    { index: "第五关", name: '英文微缩字' },
    { index: "第六关", name: '安全模切' },
    { index: "第七关", name: '镜像油墨' },
    { index: "第八关", name: '激光油墨' },
];

const details = [
    { src: g1, step: "第一关", name: '防复印橘色', decriptions: '剑南春新型防伪标签采用了防复印橘色，在紫外灯照射下“防伪”和“标识”汉字处会出现防复印的橘色及随机荧光点。一些消费者喜欢随身携带微型紫外灯验钞机，可用它一照轻松识别，非常方便。' },
    { src: g2, step: "第二关", name: '烫金徽标', decriptions: '使用了高精度烫金徽标。' },
    { src: g3, step: "第三关", name: '热敏油墨', decriptions: '热敏油墨。防伪标签右侧遇热后，粉红色会减弱变淡，散热后复原。' },
    { src: g4, step: "第四关", name: '中文微缩字', decriptions: '在剑南春新型防伪标上“防伪”与“标识”字样下，有高精度中文微缩文字“中国名酒剑南春”，在放大镜下清晰可见。' },
    { src: g5, step: "第五关", name: '英文微缩字', decriptions: '英文微缩文字。在剑南春新型防伪标上的两侧纽索纹下方，有一行蓝色高精度英文 “JIANNANCHUNDISTILLERY” 字样，在放大镜下可以清晰看到。' },
    { src: g6, step: "第六关", name: '安全模切', decriptions: '安全模切。剑南春新型防伪标采用安全模切技术，一般消费者凭肉眼就能看到标志图案边缘的模切。' },
    { src: g7, step: "第七关", name: '镜像油墨', decriptions: '镜像油墨。剑南春新型防伪标签采用了镜像油墨技术，在检测窗下，防伪标两侧的纽索纹颜色为红绿不同。' },
    { src: g8, step: "第八关", name: '激光油墨', decriptions: '激光油墨。剑南春新型防伪标签采用了激光油墨技术，在激光笔照射下，标签左右纽索纹和 R中，能测出亮点。' },
];

export default class Security extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        }
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
            once: 'true',
        });
    }

    onChaneCheck = (activeIndex) => {
        this.setState({
            activeIndex
        })
    }
    render() {
        let { activeIndex } = this.state;
        let { onChaneCheck } = this;
        return (
            <div>
                <div className={style.service_support}>
                    <div className={style.wrap}>
                        <div className={style.sbox1}>
                            <p className={style.title} data-aos="fade-up">剑南春防伪体系</p>
                            <p className={style.subtitle} data-aos="fade-up">三重</p>
                            <ul className={style.list + " clearfix"}>
                                <li data-aos="fade-up">
                                    <div className={style.pic}><img src={si1} alt="" /></div>
                                    <div className={style.con}>
                                        <p className={style.tt1}>新型防伪标签</p>
                                        <div className={style.state}>
                                            <p>第一重：是指剑南春外盒新采用的与最新版纸币防伪相似的世界领先的新型防伪标签。</p>
                                        </div>
                                    </div>
                                </li>
                                <li data-aos="fade-up">
                                    <div className={style.pic}><img src={si2} alt="" /></div>
                                    <div className={style.con}>
                                        <p className={style.tt1}>破坏性拉环防伪</p>
                                        <div className={style.state}>
                                            <p>第二重：为防止印有精密防伪标签的剑南春外包装盒被制假者利用，新的剑南春外包装盒采用了一次性开启拉环，当消费者通过防伪标签确认无误后，
                                    只要正常开启拉环，外包装盒即产生不可修复性破坏，彻底杜绝假冒者回收利用的可能！</p>
                                        </div>
                                    </div>
                                </li>
                                <li data-aos="fade-up">
                                    <div className={style.pic}><img src={si3} alt="" /></div>
                                    <div className={style.con}>
                                        <p className={style.tt1}>12位纹理防伪标签</p>
                                        <div className={style.state}>
                                            <p>第三重：纹理防伪标签的序号是唯一的（一瓶一号），纹理纤维的分布与查询结果一致，纤维能从纸张中挑出，以上三项都必须同时
                                    满足。不同时期的纹理防伪标签采用不同的形状和纤维丝，但基本原理一致，均需符合上述条件。</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className={style.sbox2}>
                            <p className={style.subtitle} data-aos="fade-up">八关</p>
                            <div className={style.stabs + " clearfix"} data-aos="fade-up">
                                {
                                    steps.map((o, i) => (
                                        <div key={i} onClick={() => { onChaneCheck(i) }} className={i === activeIndex ? style.item + " " + style.cur : style.item}>
                                            <p>{o.index}</p>
                                            <p>{o.name}</p>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className={style.swrap} data-aos="fade-up">
                                {
                                    details.map((o, i) => (
                                        <div key={i} className={i === activeIndex ? style.sbox + ' ' + style.open : style.sbox}>
                                            <div className={style.pic}><img src={o.src} alt="" /></div>
                                            <div className={style.txts}>
                                                <p className={style.tt1}>{o.step}</p>
                                                <p className={style.tt2}>{o.name}</p>
                                                <div className={style.state}>
                                                    <p>{o.decriptions}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                                {/* <div className={style.sbox + ' ' + style.open}>
                                    <div className={style.pic}><img src={baguan} alt="" /></div>
                                    <div className={style.txts}>
                                        <p className={style.tt1}>第一关</p>
                                        <p className={style.tt2}>防复印橘色</p>
                                        <div className={style.state}>
                                            <p>剑南春新型防伪标签采用了防复印橘色，在紫外灯照射下“防伪”和“标识”汉字处会出现防复印的橘
                               色及随机荧光点。一些消费者喜欢随身携带微型紫外灯验钞机，可用它一照轻松识别，非常方便。</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.sbox}>
                                    <div className={style.pic}><img src={baguan2} alt="" /></div>
                                    <div className={style.txts}>
                                        <p className={style.tt1}>第二关</p>
                                        <p className={style.tt2}>烫金徽标</p>
                                        <div className={style.state}>
                                            <p>使用了高精度烫金徽标。</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.sbox}>
                                    <div className={style.pic}><img src={baguan3} alt="" /></div>
                                    <div className={style.txts}>
                                        <p className={style.tt1}>第三关</p>
                                        <p className={style.tt2}>热敏油墨</p>
                                        <div className={style.state}>
                                            <p>热敏油墨。防伪标签右侧遇热后，粉红色会减弱变淡，散热后复原。</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.sbox}>
                                    <div className={style.pic}><img src={baguan4} alt="" /></div>
                                    <div className={style.txts}>
                                        <p className={style.tt1}>第四关</p>
                                        <p className={style.tt2}>中文微缩字</p>
                                        <div className={style.state}>
                                            <p>在剑南春新型防伪标上“防伪”与“标识”字样下，有高精度中文微缩文字“中国名酒剑南春”，在放大镜下清晰可见。</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.sbox}>
                                    <div className={style.pic}><img src={baguan5} alt="" /></div>
                                    <div className={style.txts}>
                                        <p className={style.tt1}>第五关</p>
                                        <p className={style.tt2}>英文微缩字</p>
                                        <div className={style.state}>
                                            <p>英文微缩文字。在剑南春新型防伪标上的两侧纽索纹下方，有一行蓝色高精度英文 “JIANANCHUNDISTILLERY” 字样，在放大镜下可以清晰看到。</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.sbox}>
                                    <div className={style.pic}><img src={baguan6} alt="" /></div>
                                    <div className={style.txts}>
                                        <p className={style.tt1}>第六关</p>
                                        <p className={style.tt2}>安全模切</p>
                                        <div className={style.state}>
                                            <p>安全模切。剑南春新型防伪标采用安全模切技术，一般消费者凭肉眼就能看到标志图案边缘的模切。</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.sbox}>
                                    <div className={style.pic}><img src={baguan7} alt="" /></div>
                                    <div className={style.txts}>
                                        <p className={style.tt1}>第七关</p>
                                        <p className={style.tt2}>镜像油墨</p>
                                        <div className={style.state}>
                                            <p>镜像油墨。剑南春新型防伪标签采用了镜像油墨技术，在检测窗下，防伪标两侧的纽索纹颜色为红绿不同。</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.sbox}>
                                    <div className={style.pic}><img src={baguan8} alt="" /></div>
                                    <div className={style.txts}>
                                        <p className={style.tt1}>第八关</p>
                                        <p className={style.tt2}>激光油墨</p>
                                        <div className={style.state}>
                                            <p>激光油墨。剑南春新型防伪标签采用了激光油墨技术，在激光笔照射下，标签左右纽索纹和 R中，能测出亮点</p>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        <div className={style.sbox3}>
                            <p className={style.title} data-aos="fade-up">防伪打假</p>
                            <div className={style.img} data-aos="fade-up">
                                <img src={fw} alt="" />
                            </div>
                        </div>
                        <div className={style.sbox4}>
                            <p className={style.title} data-aos="fade-up">更多防伪</p>
                            <ul className={style.list + " clearfix"}>
                                <li>
                                    <div className={style.ww}>
                                        <p className={style.tt1}>微信查询</p>
                                        <p className={style.tt2}>关注剑南春官方微信公众号，点击底部菜单：快捷服务—防伪查询。</p>
                                    </div>
                                </li>
                                <li>
                                    <div className={style.ww}>
                                        <p className={style.tt1}>短信查询</p>
                                        <p className={style.tt2}>将防伪标签上的序号发至<span>13976088088</span>接收彩信后可查询真伪</p>
                                    </div>
                                </li>
                                <li>
                                    <div className={style.ww}>
                                        <p className={style.tt1}>电话查询</p>
                                        <p className={style.tt2}>拨打电话<span>400-6800315</span>按语音提示进行操作</p>
                                    </div>
                                </li>
                                <li>
                                    <div className={style.ww}>
                                        <p className={style.tt1}>网络查询</p>
                                        <p className={style.tt2}>访问<span><a target="_blank" href="http://www.315net.com">www.315net.com</a></span>按页面提示输入序号即可查询真伪</p>
                                    </div>
                                </li>
                            </ul>
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