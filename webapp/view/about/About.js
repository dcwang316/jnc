import style from './style.scss';
import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const about1 = require('./images/about1.png');
const about2 = require('./images/about2.png');
const about3 = require('./images/about3.png');
const about4 = require('./images/about4.png');
const about5 = require('./images/about5.png');

export default class About extends Component {

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
        });
    }

    render() {
        return (
            <div>
                <div className={style.aboutus}>
                    <div className={style.wrap}>
                        <div className={style.abox1}>
                            <p className={style.title}>集团介绍</p>
                            <div className={style.img}><img src={about1} alt="" /></div>
                            <div className={style.brief}>
                                <p>四川剑南春（集团）有限责任公司是中国著名大型白酒民营股份制企业。</p>
                                <p>四川剑南春集团有限责任公司是中国著名大型白酒企业，位于历史文化名城——绵竹，地处川西平原，自古便是酿酒宝地。剑南春的生产规模和贮存规模居
                        全国白酒行业第二位，从品牌影响力、品牌美誉度、产品产销量三个角度始终处于前三名。茅台、五粮液、剑南春被消费者誉为中国三大名酒—“茅五剑”。</p>
                                <p>剑南春秉承匠心精神，永久发展中国三大名酒金字招牌，始终引领中国白酒文化。剑南春是一家具有1500多年酿酒历史的中国大型白酒企业。
                                    1951年5月5月1日，绵竹人民政府将“朱天益”、“杨恒顺”、“泰福通”、“天成祥”等30多家酒坊收归国有，成立了“四川绵竹地方国营酒厂”，1984年正
                        式更名为“四川省绵竹剑南春酒厂”，1994年改制为“四川剑南春股份有限公司”，1996年组建成立“四川剑南春集团有限责任公司”。</p>
                                <br />
                                <p>大唐皇室的长期御用奠定了剑南春"大唐国酒"的历史地位，深深烙上了盛唐文明的印迹。剑南春是唯一载入
                                    正史的中国名酒，也是中国至今唯一尚存的唐代名酒。剑南春酒的产地绵竹，酿酒历史已有三、四千年。广汉三星堆遗址出土的陶酒具和绵
                                    竹金土村出土的战国时期的铜罍、提梁壶等精美酒器、东汉时期的酿酒画像砖(残石)等文物考证以及《华阳国志?蜀志》、《晋书》等史书记载都可证实：绵竹
                                    产酒不晚于战国时期。剑南春及其系列品牌30年典藏剑南春、剑南春15年年份酒、剑南春10年年份酒、东方红、剑南老窖、绵竹大曲等30多个品牌，上百个品种，多
                                    次获得国家级、部级、省级质量奖，产品知名度、美誉度节节攀升，市场占有份额不断扩大，始终保持了畅销的强劲势头。剑南春以“诚信高质、利人利己”为经营理念，以
                                    “继承民族传统文化，发展中华国酒文明”为使命，以“坚忍不拔、自强不息、敢想敢拼、勇争一流”为剑南春精神，创造着剑南春人卓越的经济效益、环境效益和社会效益。
                                </p>
                            </div>
                        </div>
                        <div className={style.abox2}>
                            <p className={style.title} data-aos="fade-up">子公司</p>
                            <ul className={style.list + " clearfix"}>
                                <li data-aos="fade-up">
                                    <div className={style.ww}>
                                        <div className={style.pic}><img src={about4} alt="" /></div>
                                        <div className={style.con}>
                                            <p className={style.name}> 四川绵竹剑南春大酒店 </p>
                                            <div className={style.state}>
                                                <p>剑南春大酒店，隶属于剑南春集团有限责任公司，位于绵竹城中心，17层主楼高63.7米，是集住宿、餐饮、娱乐、旅游、商贸、办公、会议、观光于一体的三星级涉外宾馆。
                                                    大酒店内设高、中档客房166套（间），备有中央空调系统、自动烟感消防系统、程控电话、背景音乐系统等现代化设备设施。
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li data-aos="fade-up">
                                    <div className={style.ww}>
                                        <div className={style.pic}><img src={about5} alt="" /></div>
                                        <div className={style.con}>
                                            <p className={style.name}>四川绵竹剑南春森林公园有限公司 </p>
                                            <div className={style.state}>
                                                <p>剑南春森林公园是二十一世纪森林文化的体现。剑南春森林公园地处古蜀道旅游区，距成都80公里，依石亭江畔，交通十分便利，是川西平原独具特色的人造森林公园。
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li data-aos="fade-up">
                                    <div className={style.ww}>
                                        <div className={style.pic}><img src={about2} alt="" /></div>
                                        <div className={style.con}>
                                            <p className={style.name}>四川森普管材股份有限公司</p>
                                            <div className={style.state}>
                                                <p>四川森普管材股份有限公司，始建于1998年，总部位于四川省德阳市旌阳工业集中发展区，系专门从事新型塑料管材、管件研发、制造、销售和工程安装及自营进出
                                                    口机电产品、塑料制品等业务的股份制企业，由四川剑南春集团有限公司绝对控股，
                                                    注册资金9155.5840万元，总资产近4亿元。公司全资分公司---天津森普管材公司，位于滨海新区；公司控股子公司---贵州森普管材有限公司，位于贵阳市国家高新区。
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li data-aos="fade-up">
                                    <div className={style.ww}>
                                        <div className={style.pic}><img src={about3} alt="" /></div>
                                        <div className={style.con}>
                                            <p className={style.name}>四川金瑞电工有限责任公司 </p>
                                            <div className={style.state}>
                                                <p>四川金瑞电工有限责任公司座落在四川省绵竹市，是剑南春集团公司的全资子公司，始建于一九八八年。公司注册资本金3138万元，现拥有总资产28995万元，职
                                                    工260人，具有年产为大型发电机和大型变压器配套的电磁线产品10000吨的能力。企业先后荣获四川省企业质量信誉等级“AA”企业、主导产品“金瑞”牌电磁绕组线
                                                    系列产品已连续三届被四川省人民政府评为“四川省名牌产品”、德阳市小巨人企业、德阳市守合同重信用企业、中国德阳重大装备制造业基地成员企业。
                                                </p>
                                            </div>
                                        </div>
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
            </div>
        );
    }
}