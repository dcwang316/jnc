import style from './style.scss';
import React, { Component } from 'react';
import { Input, Button, Pagination } from 'antd';
import { Link } from 'react-router-dom';
import { ajaxAPI } from 'util/ajaxFunc';

const seachBy = [{
    id: 1, name: '综合排序', key: {}
}, {
    id: 2, name: '最新发布', key: { sortField: 'create_time', sortType: 'desc' }
}];

export default class Recruit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Areas: {},
            activeIndex: 0,
            list: [],
            words: '',
            checkindex: 0,
            jobs: [],
            fitIndex: '',
            benefitsIds: '',
            pageSize: 30,
            oderBy: {},
            pageNo: 1,
            rowCount: 0,
            jodId: '',
            keywords: ''
        };
    }

    onSearch = () => {
        let { province, jodId, keywords, pageSize, oderBy } = this.state;
        ajaxAPI('/jnc/recruitment/page', { status: 0, province, jodId, keywords, pageSize, ...oderBy }).done(({ rspCode, data }) => {
            if (rspCode === '000000') {
                this.setState({
                    list: data.records,
                    rowCount: data.rowCount
                })
            }
        })
    }

    onPageChange = (pageNo, pageSize) => {
        this.setState({ pageNo, pageSize }, this.onSearch);
    }

    onChangeArea = (activeIndex, province) => {
        this.setState({
            activeIndex,
            province
        }, () => {
            this.onSearch();
        })
    }

    onSearchArea = (callBack) => {
        ajaxAPI('/jnc/recruitment/selectAllProvinces').done(({ rspCode, data }) => {
            if (rspCode === '000000') {
                this.setState({
                    Areas: data
                }, () => {
                    callBack(Object.keys(data)[0]);
                })
            }
        })
    }

    onChangeWords = ({ target: { value } }) => {
        this.setState({ words: value })
    }

    onSearchBy = (checkindex, oderBy) => {
        this.setState({
            checkindex,
            oderBy
        }, () => {
            this.onSearch()
        })
    }

    onCompanyFit = (fitIndex, jodId) => {
        this.setState({
            fitIndex,
            jodId
        }, () => {
            this.onSearch();
        })
    }

    onSerachBykeywords = (keywords) => {
        this.setState({
            keywords
        }, () => {
            this.onSearch();
        })
    }

    componentDidMount() {
        $(".bgwraper").css({ minHeight: $(window).height() - 150 });
        this.props.history.listen(() => {
            document.documentElement.scrollTop = document.body.scrollTop = 0;
        });
        this.onSearchArea((data) => {
            this.onChangeArea(0, data)
        });

        ajaxAPI("/jnc/job/all").done(({ rspCode, data }) => {
            if (rspCode === '000000') {
                this.setState({
                    jobs: data
                })
            }
        })
    }

    render() {
        let { Areas, pageNo, pageSize, activeIndex, list, words,
            checkindex, jobs, fitIndex, rowCount } = this.state;
        return (
            <div>
                <div className={style.joinus + ' bgwraper'}>
                    <div className={style.wrap}>
                        <p className={style.title}>{"{"} <span>欢迎加入剑南春！</span>{"}"}</p>
                        <div className={style.search + " clearfix"}>
                            <Input value={words} onChange={this.onChangeWords} type="text" placeholder="请输入关键字" />
                            <Button onClick={() => { this.onSerachBykeywords(words) }}></Button>
                        </div>
                        <div className={style.content + " clearfix"}>
                            <div className={style.left + " fl"}>
                                <p className={style.tt}>工作区域：</p>
                                <ul>
                                    {
                                        Object.entries(Areas).map(([key, value], i) => (
                                            <li key={key} className={i === activeIndex ? style.cur : ''} onClick={() => { this.onChangeArea(i, key) }}>{key} （{value}）</li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className={style.rightcon}>
                                <div className={style.ww}>
                                    <div className={style.tabs}>
                                        {
                                            seachBy.map((o, i) => (
                                                <a key={i} className={i === checkindex ? style.cur : ''} onClick={() => { this.onSearchBy(i, o.key) }}>{o.name}</a>
                                            ))
                                        }
                                        <p className={style.number}>共<span>{list.length}</span>个职位</p>
                                    </div>
                                    <div className={style.signs}>
                                        {
                                            jobs.map((o, i) => (
                                                <span className={i === fitIndex ? style.cur : ''} key={i} onClick={() => { this.onCompanyFit(i, o.id) }}>{o.name}</span>
                                            ))
                                        }
                                    </div>
                                    <ul className={style.list}>
                                        {
                                            list.map((o, i) => (
                                                <li className="clearfix" key={o.id}>
                                                    <div className={style.posi + " fl"}>
                                                        <p className={style.t1}><Link to={`${process.env.ROUTE_PREFIX}/recruit/recruitDetails?id=${o.id}`}>{o.recruitmentName}</Link></p>
                                                        <p className={style.t2}><span>{o.mouthPay}</span></p>
                                                    </div>
                                                    <div className={style.state + " fr"}>
                                                        <div className={style.ts}>
                                                            <p><span>{o.area}</span> | <span>{o.workYears}</span> | <span>{o.education}</span></p>
                                                            <p><span>{o.createTime.substr(0, 10)}</span></p>
                                                        </div>
                                                        <Link to={`${process.env.ROUTE_PREFIX}/recruit/recruitDetails?id=${o.id}`} className={style.btn}>
                                                            申请
                                                        </Link>
                                                    </div>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                    {/* {rowCount ?
                                        <div style={{ padding: '5px 10px' }}>
                                            <Pagination {...{
                                                showQuickJumper: true,
                                                showSizeChanger: true,
                                                showTotal: (total, range) => `显示${range[0]}-${range[1]}条，共${total}条`,
                                                itemRender: (text, type) => {
                                                    switch (type) {
                                                        case 'prev': return <span style={{ padding: '0 4px' }}>上一页</span>; break;
                                                        case 'next': return <span style={{ padding: '0 4px' }}>下一页</span>; break;
                                                        case 'page': return text; break;
                                                    }
                                                },
                                                current: pageNo,
                                                pageSize,
                                                total: rowCount,
                                                pageSizeOptions: ['10', '25', '50', '100'],
                                                onShowSizeChange: this.onPageChange,
                                                onChange: this.onPageChange
                                            }} />
                                        </div> : null} */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}