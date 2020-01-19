import React, { Component } from 'react';

export default class Pagecomponent extends Component {
    constructor() {
        super();
        this.state = {
            pageList: [],
            currentPage: 1, //当前页码
            groupCount: 5, //页码分组，显示6个页码，其余用省略号显示
            startPage: 1,  //分组开始页码
            totalPage: 1, //总页数
            pageSize: 10,//每页大小
        }
    }

    createPage = () => {
        let { currentPage, groupCount, startPage, totalPage } = this.state;
        let { totalNums } = this.props;
        let pages = [];
        pages.push(<li className={currentPage === 1 ? "nomore" : null} onClick={() => { this.pageClick(1) }} key={-100}>首页</li>);
        pages.push(<li className={currentPage === 1 ? "nomore" : null} onClick={this.prePageHandeler} key={0}>上一页</li>);

        if (totalPage <= 10) {
            /*总页码小于等于10时，全部显示出来*/
            for (let i = 1; i <= totalPage; i++) {
                pages.push(<li key={i} onClick={() => { this.pageClick(i) }} className={currentPage === i ? "activePage" : null}>{i}</li>)
            }
        } else {
            /*总页码大于10时，部分显示*/
            //第一页
            pages.push(<li className={currentPage === 1 ? "activePage" : null} key={1} onClick={() => { this.pageClick(1) }}>1</li>)

            let pageLength = 0;
            if (groupCount + startPage > totalPage) {
                pageLength = totalPage
            } else {
                pageLength = groupCount + startPage;
            }
            //前面省略号(当当前页码比分组的页码大时显示省略号)
            if (currentPage >= groupCount) {
                pages.push(<li className="" key={-1}>···</li>)
            }
            //非第一页和最后一页显示
            for (let i = startPage; i < pageLength; i++) {
                if (i <= totalPage - 1 && i > 1) {
                    pages.push(<li className={currentPage === i ? "activePage" : null} key={i}
                        onClick={() => { this.pageClick(i) }}>{i}</li>)
                }
            }
            //后面省略号
            if (totalPage - startPage >= groupCount + 1) {
                pages.push(<li className="" key={-2}>···</li>)
            }
            //最后一页
            pages.push(<li className={currentPage === totalPage ? "activePage" : null} key={totalPage}
                onClick={() => { this.pageClick(totalPage) }}>{totalPage}</li>)
        }
        //下一页
        pages.push(<li className={currentPage === totalPage ? "nomore" : null}
            onClick={this.nextPageHandeler}
            key={totalPage + 1}>下一页</li>);
        pages.push(<li className={currentPage === totalPage ? "nomore" : null}
            onClick={() => { this.pageClick(totalPage) }}
            key={totalPage + 2}>尾页</li>);
        pages.push(<li className="nomore" key={totalPage + 3}>共{totalNums}条</li>);
        return pages;
    }

    prePageHandeler = () => {
        let { currentPage } = this.state
        if (--currentPage === 0) {
            return false
        }
        this.pageClick(currentPage)
    }

    pageClick = (currentPage) => {
        const { groupCount, totalPage } = this.state
        const getCurrentPage = this.props.pageCallbackFn;
        if (currentPage === 1) {
            this.setState({
                startPage: 1,
            })
        } else if (totalPage - currentPage <= groupCount - 2) {
            this.setState({
                startPage: totalPage - 4,
            })
        } else {
            if (currentPage >= groupCount) {
                this.setState({
                    startPage: currentPage - 2,
                })
            }
            if (currentPage < groupCount) {
                this.setState({
                    startPage: 1,
                })
            }
        }

        this.setState({
            currentPage
        })
        getCurrentPage(currentPage)
    }

    nextPageHandeler = () => {
        let { currentPage, totalPage } = this.state
        if (++currentPage > totalPage) {
            return false
        }
        this.pageClick(currentPage);
    }

    componentDidMount() {
        let { pageSize } = this.state;
        let { totalNums, parentControl } = this.props;
        pageSize = this.props.pageSize ? this.props.pageSize : pageSize;
        let { onResetParams } = this;
        parentControl({ onResetParams });

        this.setState({
            totalPage: Math.ceil(totalNums / pageSize)
        });
    }

    onResetParams = () => {
        this.setState({
            currentPage: 1,
            startPage: 1,
        })
    }

    render() {
        let pageList = this.createPage();
        return (
            <ul className="page-container">
                {pageList}
            </ul>
        )
    }
}
