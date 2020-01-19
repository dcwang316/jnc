import style from './style.scss';
import React, { Component } from 'react';
import ECharts from 'echarts';
import 'echarts/map/js/china';
import { Button, Input, Modal } from 'antd';
import { ajaxAPI } from 'util/ajaxFunc';
// import { areaJson } from 'util/level';

export default class Shop extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isShowModel: false,
            list: [],
            keywords: '',
            provinces: [],
            province: '',
            isShowpPanl: false,
            isShowcPanl: false,
            cities: [],
            city: '',
            searchkeys: ''
        };
        this.onShowModel = this.onShowModel.bind(this);
        this.onHideModel = this.onHideModel.bind(this);
    }

    onShowpPanl = () => {
        this.setState({
            isShowpPanl: !this.state.isShowpPanl
        })
    }

    onShowcPanl = () => {
        this.setState({
            isShowcPanl: !this.state.isShowcPanl
        })
    }

    onSelectCity = (city) => {
        this.setState({
            isShowcPanl: false,
            searchkeys: '',
            keywords: '',
            city
        }, () => {
            this.onSearch();
        })
    }

    onSelectProvince = (province) => {
        this.setState({
            province,
            city: '',
            searchkeys: '',
            keywords: '',
            isShowpPanl: false
        }, () => {
            ajaxAPI('/jnc/store/cities', { province }).done(({ rspCode, data }) => {
                if (rspCode === '000000') {
                    this.setState({ cities: data }, () => {
                        this.onSearch();
                    });
                }
            })
        })
    }

    // onShowModel(province) {
    //     this.setState({
    //         isShowModel: true,
    //         province,
    //         city: '',
    //     }, () => {
    //         this.onSearch();
    //         let sources = areaJson.provinces;
    //         let data = [];
    //         for (let i = 0, len = sources.length; i < len; i++) {
    //             if (sources[i]['name'].includes(province)) {
    //                 data = sources[i]['cities'].map((o) => o.name);
    //                 break;
    //             }
    //         }
    //         this.setState({
    //             cities: data,
    //         })
    //     })
    // }
    onShowModel(province) {
        this.setState({
            isShowModel: true,
            province,
            city: '',
        }, () => {
            this.onSearch();
            ajaxAPI('/jnc/store/cities', { province }).done(({ rspCode, data }) => {
                if (rspCode === '000000') {
                    this.setState({ cities: data });
                }
            })
        })
    }
    // onSelectProvince = (province) => {
    //     this.setState({
    //         province,
    //         city: '',
    //         isShowpPanl: false
    //     }, () => {
    //         this.onSearch();
    //         let sources = areaJson.provinces;
    //         let data = [];
    //         for (let i = 0, len = sources.length; i < len; i++) {
    //             if (sources[i]['name'] === province) {
    //                 data = sources[i]['cities'].map((o) => o.name);
    //                 break;
    //             }
    //         }
    //         this.setState({
    //             cities: data
    //         })
    //     })
    // }

    onSearch = () => {
        let { province, city, keywords } = this.state;
        ajaxAPI('/jnc/store/allByProvinceOrCity', { province, city, keywords }).done(({ rspCode, data }) => {
            if (rspCode === '000000') {
                this.setState({ list: data });
            }
        })
    }

    onHideModel() {
        this.setState({
            isShowModel: false,
            isShowpPanl: false,
            isShowcPanl: false,
            searchkeys: '',
            keywords: ''
        })
    }


    onChangeWord = ({ target: { value } }) => {
        this.setState({ searchkeys: value })
    }

    onSearchByKeywords = () => {
        this.setState({
            keywords: this.state.searchkeys
        }, () => {
            this.onSearch();
        })
    }

    componentDidMount() {
        this.props.history.listen(() => {
            document.documentElement.scrollTop = document.body.scrollTop = 0;
        });
        let myChart = ECharts.init(document.getElementById('ditu'));
        var option = {
            series: [
                {
                    name: '营销网络',
                    type: 'map',
                    mapType: 'china',
                    selectedMode: 'single',
                    data: [],
                    itemStyle: {
                        borderColor: '#bcbcbc',//省份边框颜色
                        borderWidth: 2,//边框线宽
                        areaColor: '#f6f6f6'
                    },
                    label: {
                        show: true,//省份是否显示
                        color: "#333"//省份字体颜色
                    },
                    emphasis: {
                        label: {
                            show: true,
                            color: "#fff"//省份字体颜色
                        },
                        itemStyle: {
                            areaColor: "#d43235"
                        }//鼠标HOVER省份
                    },
                    showLegendSymbol: false,
                    left: 0,
                    right: 0
                }
            ]
        };
        myChart.setOption(option, true);
        let { onShowModel } = this;
        myChart.on("click", function (params) {
            onShowModel(params.name);
        });
        // this.setState({
        //     provinces: areaJson.provinces.map((o) => o.name)
        // })
        ajaxAPI('/jnc/store/provinces').done(({ rspCode, data }) => {
            if (rspCode === '000000') {
                this.setState({ provinces: data });
            }
        })
    }

    render() {
        let { onHideModel, onShowpPanl, onShowcPanl, onSelectProvince, onSelectCity, onSearchByKeywords } = this;
        let { isShowModel, list, searchkeys, province, provinces, isShowpPanl, isShowcPanl, cities, city } = this.state;
        return (
            <div>
                <div className={style.service_network}>
                    <div className={style.wrap}>
                        <div className={style.map} id="ditu"></div>
                        {/* <div className={style.search}>
                            <Input type="text" placeholder="全国专卖店查询" />
                            <Button className={style.btn}></Button>
                        </div> */}
                    </div>
                </div>
                <div className="copyright">
                    <a>四川剑南春(集团)有限责任公司</a>
                    &nbsp;&nbsp;All Rights Reserved&nbsp;&nbsp;
                    <a href="http://beian.miit.gov.cn/" target="_blank">蜀ICP备05018250号</a>&nbsp;&nbsp;
                    <img style={{ verticalAlign: 'top' }} src={require('style/ga.png')} width='14' height='14' />川公网安备
                    <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=51068302000111" target="_blank">51068302000111号</a>
                </div>
                {
                    isShowModel ?
                        <Modal closable={false} visible={true} footer={null} width={900} onCancel={onHideModel}>
                            <div className={style.content}>
                                <div className={style.top}>
                                    {/* <p className={style.title}><span>{province}</span></p> */}
                                    <div className={style.province}>
                                        <p className={style.item}><span onClick={onShowpPanl}>{province}</span></p>
                                        <div className={isShowpPanl ? style.itemlist + ' ' + style.down : style.itemlist}>
                                            {
                                                provinces.map((o, i) => (
                                                    <a className={province && o.includes(province) ? style.active : ''} key={i} onClick={() => { onSelectProvince(o) }}>{o}</a>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <div className={style.province}>
                                        <p className={style.item}><span onClick={onShowcPanl}>{city ? city : '市/区'}</span></p>
                                        <div className={isShowcPanl ? style.itemlist + ' ' + style.down : style.itemlist}>
                                            {
                                                cities.map((o, i) => (
                                                    <a className={city && o.includes(city) ? style.active : ''} key={i} onClick={() => { onSelectCity(o) }}>{o}</a>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <div className={style.search}>
                                        <Input value={searchkeys} onChange={this.onChangeWord} type="text" placeholder="输入关键字" />
                                        <Button onClick={onSearchByKeywords} className={style.btn}></Button>
                                    </div>
                                </div>
                                <div className={style.listcontent}>
                                    <ul className={style.list + " clearfix"}>
                                        {list.map((o, i) => (
                                            <li key={o.id}>
                                                <div className={style.ww}>
                                                    <p className={style.name}>{o.name}</p>
                                                    <div className={style.txt}>
                                                        <p>{o.address}</p>
                                                        <p>{o.phone}</p>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                    <p className={style.allnum}>共<span>{list.length}</span>个结果</p>
                                </div>
                            </div>
                        </Modal>
                        : null
                }
            </div >
        );
    }
}