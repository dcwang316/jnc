import style from './style.scss';
import './style.css';
import React, { Component } from 'react';
import Swiper from 'swiper';
import 'style/swiper.min.css';
import { ajaxAPI } from 'util/ajaxFunc';
import { getUrlParams } from 'util/tool';

// const psub = require("./images/psub.png");
// const p1 = require("./images/p1.png");
const imgUrl = 'http://jnc.quduoduo.cc/files/';

export default class ProductDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            detailsObj: {}
        }
    }

    componentDidMount() {
        this.props.history.listen(() => {
            document.documentElement.scrollTop = document.body.scrollTop = 0;
        });
        let { id } = getUrlParams(window.location.search);
        ajaxAPI('/jnc/product/detail/selectById/' + id).done(({ rspCode, data }) => {
            if (rspCode === '000000') {
                this.setState({ detailsObj: data }, () => {
                    new Swiper('.picswiper', {
                        pagination: {
                            el: '.picswiper .swiper-pagination',
                            clickable: true,
                        },
                        loop: true,
                        autoHeight: true,
                        autoplay: {
                            delay: 4000,
                            disableOnInteraction: true,
                        },
                    })
                })
            }
        });

    }

    render() {
        let { detailsObj: { spec, name, banners = '', buyLink } } = this.state;
        let { img } = getUrlParams(window.location.search);
        return (
            <div className={style.product_center}>
                <div className={style.subbanner}>
                    <img src={imgUrl + img} alt="" />
                </div>
                <div className={style.wrap}>
                    <div className="product_detail clearfix">
                        <div className="pic fl">
                            <div className="picswiper">
                                <ul className="swiper-wrapper">
                                    {
                                        banners.length > 0 ?
                                            banners.split(',').map((o, i) => (
                                                <li className="swiper-slide" key={i}>
                                                    <img src={imgUrl + o} alt="" />
                                                </li>
                                            ))
                                            : ''
                                    }
                                    {/* <li className="swiper-slide">
                                        <img src={p1} alt="" />
                                    </li>
                                    <li className="swiper-slide">
                                        <img src={p1} alt="" />
                                    </li>
                                    <li className="swiper-slide">
                                        <img src={p1} alt="" />
                                    </li> */}
                                </ul>
                                <div className="swiper-pagination"></div>
                            </div>
                        </div>
                        <div className={style.content}>
                            <p className={style.name}>{name}</p>
                            <div className={style.brief}>
                                {/* <p>品牌介绍</p> */}
                                {/* <p>作为剑南春旗下的高端产品，东方红不仅将剑南春传承千年的古老技法发扬光大更是凭借在酒界极负盛名的剑南春酒体设计中心的精心勾调，保障了其符合现代消费者的口感与审美品味。</p> */}
                                {/* <br /> */}
                                {/* <p>它代表了剑南春超卓酿酒技艺的超高水准，其选酒、勾调、生产、贮存等一系列过程，都执行了剑南春最高级别的工艺标准，是当之无愧的中国顶级名酒中的佼佼者。</p> */}
                                <p dangerouslySetInnerHTML={{
                                    __html: spec
                                }}></p>
                            </div>
                            {/* <ul className={style.sign}>
                                <li><span>香型： </span>浓香型</li>
                                <li><span>原料： </span>水、高粱、大米、糯米、小麦、玉米</li>
                                <li><span>产品标准号： </span>GB/T10781.1(优级) </li>
                                <li><span>净含量： </span>500ml、100ml、</li>
                                <li><span>酒精度： </span>52%vol、42% vol、38% vol</li>
                            </ul> */}
                            <a target='_blank' className={style.buybtn} href={buyLink}><span>商城购买</span></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
