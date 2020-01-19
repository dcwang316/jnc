import style from './style.scss';
import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const yuan = require("./images/yuan.png");
const ditu = require("./images/ditu.png");
const wz1 = require("./images/wz1.png");
const wz2 = require("./images/wz2.png");
const wz3 = require("./images/wz3.png");
const wz4 = require("./images/wz4.png");
const wz5 = require("./images/wz5.png");
const wz6 = require("./images/wz6.png");
const chuan = require("./images/chuan.png");

function change() {
    // if (!location.pathname.endsWith('/history/origin') && !location.pathname.endsWith('/history')) return;
    let hbox2 = $('.hbox2').offset().top - 800;
    let hbox3 = $('.hbox3').offset().top - 800;
    let hbox4 = $('.hbox4').offset().top - 800;
    let hbox5 = $('.hbox5').offset().top - 800;
    let hbox6 = $('.hbox6').offset().top - 800;
    if ($(window).scrollTop() >= hbox2) {
        $('.hbox2').addClass('slidering')
    }
    if ($(window).scrollTop() >= hbox3) {
        $('.hbox3').addClass('slidering')
    }
    if ($(window).scrollTop() >= hbox4) {
        $('.hbox4').addClass('slidering')
    }
    if ($(window).scrollTop() >= hbox5) {
        $('.hbox5').addClass('slidering')
    }
    if ($(window).scrollTop() >= hbox6) {
        $('.hbox6').addClass('slidering')
    }
}

export default class Origin extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        AOS.init({
            offset: 200,
            duration: 1000,
            easing: 'ease',
            delay: 100,
            once: 'true'
        });
        document.onscroll = () => {
            change();
        }
    }

    componentWillUnmount() {
        document.onscroll = null
    }

    render() {
        return (
            <div>
                <div className={style.history}>
                    <div className={style.wrap}>
                        <div className={style.hbox1} data-aos="fade-up"><img src={yuan} alt="" /></div>
                        <div className={style.hbox + " hbox2 " + style.hbox2 + " clearfix"} >
                            <div className={style.left_pic + " left_m1"}></div>
                            <div className={style.right_pic + " right_m1"}></div>
                            <div className="fl"><img src={ditu} alt="" /></div>
                            <div className={style.wz}>
                                <p className={style.timg}><img src={wz1} alt="" /></p>
                                <div className={style.state}>
                                    <p>巴山钟灵，蜀水毓秀。</p>
                                    <p>
                                        在巴蜀大地上，有一条成Ｕ形的名酒带，勤劳智慧的巴蜀先民在这里创造了辉煌灿烂的巴蜀文化。座落在这条名酒带的绵竹，酿酒历史已有四
                                        千余年，广汉三星堆蜀文化遗址出土的陶酒具和绵竹金土村出土的战国时期的铜罍，
                            提梁壶等精美酒器以及东汉时期的酿酒画像砖等文物考证以及《华阳国志·蜀志》、《晋书》等史书记载都可证实：绵竹产酒不晚于战国时期。 </p>
                                </div>
                            </div>
                            <img className={style.chuan} src={chuan} alt="" />
                        </div>
                        <div className={style.hbox + " hbox3 " + style.hbox3 + " clearfix"} >
                            <div className={style.left_pic + " left_m2"}></div>
                            <div className={style.right_pic + " right_m2"}></div>
                            <div className="fr"><img src={wz3} alt="" /></div>
                            <div className={style.wz}>
                                <p className={style.timg}><img src={wz2} alt="" /></p>
                                <div className={style.state}>
                                    <p>剑南春传统酿造技艺在漫长的人类发展史中始终得到继承和发展。</p>
                                    <p>
                                        在唐朝，百业兴旺，绵竹成熟酿酒技艺下诞生的“剑南烧春”（唐代，绵竹属剑南道而得名）倾动朝野。唐人李肇的《唐·国史补》对天下名酒记载
                                        道:“酒则有……乌程之若下，剑南之烧春……”，另据黄葆真《事类统编》
                                        载曰：“为生春，《德宗本记》剑南贡生春酒。” 剑南烧春作为宫廷御酒而被载于《后唐书·德宗本记》。这是唯一被载入正
                            史的宫廷御酒，也是中国至今唯一尚存的唐代名酒。 </p>
                                </div>
                            </div>
                        </div>
                        <div className={style.hbox + " hbox4 " + style.hbox4 + " clearfix"} >
                            <div className={style.left_pic + " left_m3"}></div>
                            <div className={style.right_pic + " right_m3"}></div>
                            <div className={style.title + " fl"}><img src={wz4} alt="" /></div>
                            <div className={style.wz}>
                                <div className={style.state}>
                                    <p>时至宋代，绵竹酿酒技艺在传承前代的基础上又有了新的发展，酿制出“鹅黄”、“蜜酒”，其中“蜜酒”被作为独特的酿
                                        酒法收于李保的《续北山酒经》，被宋伯仁《酒小史》列为名酒之中。明代徐炬《酒谱》中记载：“西蜀道士杨世昌造蜜酒。
                                        ”蜜酒鹅黄的出现，不仅形成了一个名酒系列，而且为中国文学史，也为中国酒文化史留下了千古美谈。北宋大文学家苏轼与绵竹道
                                        士杨士昌的趣闻，南宋大诗人陆游的剑南诗稿等许多文坛佳话蕴于其中。
                                    </p>
                                    <br />
                                    <p>在宋代，剑南春酒传统酿造技艺的影响和作用不仅表现在社会经济发展上，同时还为南宋抗金做出了重要贡献。据《宋会要》记
                                        载：南宋初年，为了筹集军费抗击金兵，时任川陕巡抚处置使的绵竹人张浚从绵竹兴旺发达的酿酒业和大额的酒税上得到启
                                        发，于建炎三年（1129年）实施“隔槽酒法”，鼓励民间纳钱酿酒，次年便使四川酒税由过去的缗钱140万缗猛增至690万缗。此法前后施行了七十余年。
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={style.hbox + " hbox5 " + style.hbox4 + " clearfix"} >
                            <div className={style.left_pic + " left_m4"}></div>
                            <div className={style.right_pic + " right_m4"}></div>
                            <div className={style.title + " fl"}><img src={wz5} alt="" /></div>
                            <div className={style.wz}>
                                <div className={style.state}>
                                    <p>明末清初，由于战乱不断，人口锐减，导致了绵竹农业荒芜，经济萧条。依附于农业发达而生产酿酒业，受到了威胁，直到
                                        清康熙年间（1662—1722）才逐渐恢复，出现了朱、杨、白、赵等较大规模酿酒作坊。剑南春酒传统酿造技艺得到进一步的发展。《绵竹县志》
                                        记载：“大曲酒，邑特产，味醇厚，色洁白，状若清露。”乾隆年间太史李调元，宦游足迹遍及大半个中国，自谓“一笑市人谁知我，醉来高卧酒家楼”，
                                        并夸口尝尽天下名酒，是个十足的饮酒行家。他说自己“天下名酒皆尝尽，却爱绵竹大曲醇。
                                    </p>
                                    <br />
                                    <p>清末，绵竹酿酒作坊已有上百家，著名大曲坊已增到18家，绵竹商贸因此更为昌盛，出现了“山程水陆货争呼，坐贾行商日夜图。济济直如绵竹茂，芳名
                                        不愧小成都”（清诗人李锡命《咏绵竹》）的繁荣景象。
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={style.hbox + " hbox6 " + style.hbox4 + " " + style.hbox6 + " clearfix"} >
                            <div className={style.left_pic + " left_m5"}></div>
                            <div className={style.right_pic + " right_m5"}></div>
                            <div className={style.title + " fl"}><img src={wz6} alt="" /></div>
                            <div className={style.wz}>
                                <div className={style.state}>
                                    <p></p>
                                    <p>
                                        1911年，绵竹大曲首获四川省劝业会头等奖；1928年再度获四川省国货展览会奖；1929年“乾元泰”、“大道生”、“瑞昌新”、“义全和”等12家大曲酒作坊的产品，又
                                        获四川省优秀酒类奖；1932年，四川省举办第一次名产品展览会，绵竹提供了多种产品送展，其中“恒丰泰”酿造的绵竹大曲酒首次被批准使用注册商标，以崭新的时
                                        代风貌引起一番轰动。当时一诗人曾为绵竹的酿酒家题词：“百里闻香绵竹酒，天下何人不识君。”据《绵竹县酒类调查表》记载：至1941年，全县酿酒作坊已多达200余
                                        家，产酒二百余万公斤。从1913年绵竹“义全兴”大曲坊在成都开店销售绵竹大曲，至1949年，专门经营绵竹大曲的酒庄、酒
                                        行、酒店已达50余家，绵竹大曲被称为成都“酒坛一霸”。而且还销往重庆、武汉、南京、上海等地。台湾《四川经济志》称：“四川大曲酒，首推绵竹。”
                                    </p>
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