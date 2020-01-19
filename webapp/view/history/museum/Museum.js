import style from './style.scss';
import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const h1 = require("./images/h1.png");
const h2 = require("./images/h2.png");
const mu2 = require("./images/mu2.png");
const mu3 = require("./images/mu3.png");
const mu4 = require("./images/mu4.png");
const mu5 = require("./images/mu5.png");
const steps = [
    { name: '古蜀文明' },
    { name: '唐风遗韵' },
    { name: '紫岩丰碑' },
    { name: '传承进步' },
    { name: '跨越发展' }
];

const details = [
    { src: mu5, name: '古蜀文明——绵延千年的酿酒文化', decriptions: '考古发现证明，人类的酿酒历史可以追溯到六千年前。四川是美酒的故乡，古往今来，川酒技冠群芳，享誉中外，而北接茂汶，南连广汉的绵竹更是名酒之乡。众所周知，被誉为世界第九大奇迹的广汉三星堆是川西文明之源，也是川酒文化的源头，在与绵竹比邻的广汉三星堆出土了大批酒具和与酒有关的文物，确切地表明了早在商周时期，绵、雒之地已经掌握了谷物酿酒的技术。源远流长展段展示的正是古蜀酿酒文明的珍贵遗存。' },
    { src: mu2, name: '唐风遗韵——大唐盛世的宫廷御酒', decriptions: '唐代是中国封建社会鼎盛时期，当时绵竹所产“剑南烧春”以其浓烈芳香而驰誉全国，据《后唐书·德宗本纪》记载，在盛唐时期剑南春被选为宫廷御酒，成为唐代最负盛名的国酒。大唐皇室的长期御用造就了剑南春"大唐国酒"的历史地位，是现代中国唯一载入正史的中国名酒，也是中国至今唯一尚存的大唐名酒。据传“诗仙”李白为了剑南烧春，曾留下“解貂赎酒”的佳话、“诗圣”杜甫居住成都期间，也与剑南烧春结下不解之缘。' },
    { src: mu3, name: '紫岩丰碑——剑南烧春的光辉岁月', decriptions: '唐朝以后，绵竹酒业持续发展。宋代的酒业生产规模巨大，名酒辈出，酿酒技术已经成熟，彼时四川酒业生产进入全盛时期，成为全国最主要的酒业生产基地。两宋王朝在四川设立众多酒务管理官，四川的酒课税收成为国家财政一项重要收入。南宋绵竹人张浚，自号紫岩，知枢密院事，任川陕京西诸路宣抚使，采纳了总领四川财赋的赵开变革酒法的建议，推行“隔槽酒法”，允许民间纳钱酿酒，推动了宋代酿酒业的发展。' },
    { src: mu4, name: '传承进步——朝气蓬勃的行业盛况', decriptions: '明清时期，蒸馏酒成为主流产品，朱煜在绵竹开办大曲酒坊，此后相继有杨、白、赵三家大曲坊开业，此时出产的绵竹大曲已经成为称霸国内的白酒。清代有《绵竹县志》记载“绵竹大曲酒，邑特产。味醇香，色洁白，状若清露。“1911年绵竹大曲在四川省劝业会上斩获大奖，由此开启了绵竹大曲的百年荣耀之路。博物馆陈列的珍贵图片资料从侧面展示了这一时期的盛况。' },
    { src: h1, name: '跨越发展——功绩卓著的近代掠影', decriptions: '春回剑南展段是当代剑南春发展情况的展示。凭借得天独厚的自然生态环境、延续本土千年的酒文化，酒乡绵竹伴随着新中国的成长进入了酒业蓬勃发展的大好时时期。从“四川绵竹县地方国营酒厂”成立，到剑南春蝉联三届“中国名酒“荣誉称号，再到走遍全球，剑南春紧抓时代机遇，实现了企业的飞速发展。这一展段展示了剑南春近代波澜壮阔发展历史，而新一代的剑南春人也正肩负使命，创造着剑南春更加辉煌的未来。' },
]
export default class Museum extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        }
    }

    onChaneCheck = (activeIndex) => {
        this.setState({
            activeIndex
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
        })
    }

    render() {
        let { activeIndex } = this.state;
        let { onChaneCheck } = this;
        return (
            <div>
                <div className={style.museum}>
                    <div className={style.mbox1}>
                        <p className={style.title} data-aos="fade-up">剑南春博物馆</p>
                        <div className={style.brief} data-aos="fade-up">
                            <p>剑南春酒史博物馆，是由剑南春集团公司主理修建的酒类专业博物馆，馆址位于剑南春厂房建筑群落的中心轴线上，占地约4千平米，
                                于2003年11月9日正式竣工开馆。博物馆主体分为序厅和主陈列厅两个部分，主要收藏和展示了与剑南春有关的从南齐到现代，长达15
                                00余年以来的相关文献资料和酒史文物，共展出文物六百余件，图片、资料近百件。博物馆珍藏的遗存不仅是剑南春辉煌历史的见证，
                    也是中国白酒行业珍贵的研究资料，为白酒文化的研究提供了宝贵的参考史料。</p>
                        </div>
                    </div>
                    <div className={style.mbox2}>
                        <div className={style.wrap + " clearfix"}>
                            <div className={style.left + " fl"} data-aos="fade-up-right">
                                <p className={style.title}>博物馆导览</p>
                                <div className={style.tabs}>
                                    {
                                        steps.map((o, i) => (
                                            <a key={i} onClick={() => { onChaneCheck(i) }} className={i === activeIndex ? style.active : ''}>{o.name}</a>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className={style.right} data-aos="fade-up-left">
                                {
                                    details.map((o, i) => (
                                        <div key={i} className={i === activeIndex ? style.pic + ' ' + style.open : style.pic}>
                                            <img className={style.img} src={o.src} alt="" />
                                            <div className={style.con}>
                                                <p className={style.tt}>{o.name}</p>
                                                <div className={style.brief}>
                                                    <p>
                                                        {o.decriptions}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className={style.mbox3}>
                        <p className={style.title} data-aos="fade-up">馆藏精品</p>
                        <div className={style.img} data-aos="fade-up">
                            <img src={h2} alt="" />
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