import style from './style.scss';
import React, { Component } from 'react';
import { Button, Input, Modal, Upload, message } from 'antd';
import { Link } from 'react-router-dom';
import { ajaxAPI, uploadFile } from 'util/ajaxFunc';
import { getUrlParams, downloadLoad } from 'util/tool';

let timer = null;
// const limitType = ['application/vnd.ms-powerpoint', 'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
export default class RecruitDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isShowApply: false,
            isShowUpload: false,
            msg: {},
            phone: '',
            applyName: '',
            others: [],
            code: '',
            isCorrent: false,
            isDisabled: false,
            isError: false
        };
        this.onShowModel = this.onShowModel.bind(this);
        this.onHideModel = this.onHideModel.bind(this);
        this.onShowUpload = this.onShowUpload.bind(this);
        this.onHideUpload = this.onHideUpload.bind(this);
    }

    onShowModel() {
        this.setState({
            isShowApply: true,
            phone: '',
            applyName: '',
            code: '',
            isCorrent: false,
            isError: false
        });
        window.clearInterval(timer); //停止计时器
        $("#get_btn").html('点击发送验证码').attr('disabled', false);
    }

    onHideModel() {
        message.destroy();
        this.setState({
            isShowApply: false
        })
    }

    onShowUpload() {
        message.destroy();
        this.setState({
            isShowUpload: true,
            isShowApply: false,
        })
    }

    onHideUpload() {
        this.setState({
            isShowUpload: false
        })
    }

    componentDidMount() {
        $(".bgwraper").css({ minHeight: $(window).height() - 150 });
        this.props.history.listen(() => {
            document.documentElement.scrollTop = document.body.scrollTop = 0;
        });
        let { id } = getUrlParams(window.location.search);
        ajaxAPI("/jnc/recruitment/selectById/" + id).done(({ rspCode, data }) => {
            if (rspCode === '000000') {
                this.setState({
                    msg: data
                })
            }
        });

        ajaxAPI("/jnc/recruitment/selectOthers/" + id).done(({ rspCode, data }) => {
            if (rspCode === '000000') {
                this.setState({
                    others: data
                })
            }
        });
    }

    componentWillReceiveProps(newProps) {
        let { id } = getUrlParams(newProps.location.search);
        ajaxAPI("/jnc/recruitment/selectById/" + id).done(({ rspCode, data }) => {
            if (rspCode === '000000') {
                this.setState({
                    msg: data
                })
            }
        });

        ajaxAPI("/jnc/recruitment/selectOthers/" + id).done(({ rspCode, data }) => {
            if (rspCode === '000000') {
                this.setState({
                    others: data
                })
            }
        });
    }

    componentWillUnmount() {
        window.clearInterval(timer); //停止计时器
        $("#get_btn").html('点击发送验证码').attr('disabled', false);
    }

    onUpload = (file) => {
        let { size, type } = file;
        // if (size / 1024 / 1024 > 2) {
        //     message.warn("上传附件不能超过2M");
        //     return false;
        // }
        // if (!limitType.includes(type)) {
        //     message.warn("仅支持上传，excel、word、ppt、pdf 格式的文件");
        //     return false;
        // }
        let formData = new FormData();
        formData.append('file', file);
        formData.append('type', 9);
        let { phone, applyName, code } = this.state;
        let { id } = getUrlParams(window.location.search);
        uploadFile('/jnc/file/upload', formData).done(({ rspCode, data }) => {
            if (rspCode === '000000') {
                ajaxAPI("/jnc/resume/save", { src: data, code, applyName, phone, recruitmentId: id }).done(({ rspCode, rspDesc }) => {
                    if (rspCode === '000000') {
                        Modal.info({
                            title: '申请成功！',
                        });
                    } else {
                        message.error(rspDesc)
                    }
                })
            }
            this.setState({
                isShowUpload: false
            });
        }).fail(() => {
            message.error("上传失败");
        })
    }

    onDownLoad = () => {
        downloadLoad();
    }

    onApply = () => {
        let { phone, applyName, code } = this.state;
        if (!applyName) {
            message.destroy();
            message.warn("请输入姓名");
            return false;
        }
        if (!/^1(3|4|5|7|8|9)\d{9}$/.test(phone)) {
            message.destroy();
            message.warn("请输入正确的手机号码");
            return false;
        }
        if (isNaN(code) || code.length != 6) {
            message.destroy();
            message.warn("请输入正确的验证码");
            return false;
        }
        ajaxAPI("/jnc/resume/confirm", { phone, code }).done(({ rspCode, rspDesc }) => {
            if (rspCode === '000000') {
                this.setState({ isError: false });
                this.onShowUpload();
            } else {
                this.setState({ isError: true })
            }
        })

    }

    onChangePhone = ({ target: { value } }) => {
        this.setState({ phone: value }, () => {
            if (/^1(3|4|5|7|8|9)\d{9}$/.test(value)) {
                this.setState({ isCorrent: true })
            } else {
                this.setState({ isCorrent: false })
            }
        });
    }

    onChangeName = ({ target: { value } }) => {
        this.setState({ applyName: value });
    }

    onChangeCode = ({ target: { value } }) => {
        this.setState({ code: value });
    }

    onGetCode = () => {
        let { phone } = this.state;
        if (!/^1(3|4|5|7|8|9)\d{9}$/.test(phone)) {
            message.destroy();
            message.warn("请输入正确的手机号码");
            return false;
        }
        this.setState({ isDisabled: true });
        ajaxAPI("/jnc/resume/code", { phone }).done(({ rspCode, rspDesc }) => {
            message.destroy();
            this.setState({ isDisabled: false });
            if (rspCode === '000000') {
                message.success("验证码已发送至手机");
                let curCount = 100;
                timer = setInterval(() => {
                    if (curCount == 0) {
                        window.clearInterval(timer); //停止计时器
                        $("#get_btn").html('点击发送验证码').attr('disabled', false);
                    } else {
                        curCount--;
                        $("#get_btn").html(curCount + 's后重新获取').attr('disabled', true);
                    }
                }, 1000);
            } else {
                message.error(rspDesc)
            }
        })
    }

    render() {
        let { isShowApply, isShowUpload, msg: { createTime = '', area, description, address, recruitmentName, mouthPay,
            education, workYears, hireNumber, effectiveDate, companyBenefit = [] }, phone, applyName, code, isCorrent,
            others, isDisabled, isError } = this.state;
        let { onHideModel, onShowModel, onHideUpload, onUpload, onGetCode, onChangeCode,
            onChangePhone, onChangeName, onApply } = this;
        return (
            <div>
                <div className={style.recruit + ' bgwraper'}>
                    <div className={style.wrap}>
                        <p className={style.location}><a onClick={this.props.history.goBack}>人才招聘</a> > <a>招聘详情</a></p>
                        <div className={style.content + " " + style.basicinfo}>
                            <p className={style.date}>{createTime && createTime.length > 10 ? createTime.substr(0, 10) : ''}发布</p>
                            <p className={style.name}>{recruitmentName}</p>
                            <p className={style.price}><span>{mouthPay}</span></p>
                            <p className={style.ts}>
                                <span>学历：{education}</span> ｜
                                <span>经验：{workYears}</span> ｜
                                <span>招聘人数：{hireNumber}人</span>
                            </p>
                            <a className={style.applybtn} onClick={onShowModel}>马上申请</a>
                        </div>
                        <div className={style.redetail + " clearfix"}>
                            <div className={style.right + " fr"}>
                                <p className={style.tt0}>其他职位</p>
                                <ul>
                                    {
                                        others.map((o, i) => (
                                            <li key={i}>
                                                <Link to={`${process.env.ROUTE_PREFIX}/recruit/recruitDetails?id=${o.id}`}>
                                                    <p className={style.name}>{o.recruitmentName}</p>
                                                    <p className={style.addr}>{o.province + ' ' + o.area}</p>
                                                    <p className={style.ts}>{o.mouthPay}</p>
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className={style.left}>
                                <div className={style.bgw}>
                                    <p className={style.tt}>职位描述</p>
                                    <div className={style.infos + " clearfix"}>
                                        <span className={style.s1 + " fl"}>公司福利：</span>
                                        <div className={style.signs}>
                                            {/* <span>五险一金</span>
                                            <span>交通补贴</span>
                                            <span>员工旅游</span> */}
                                            {
                                                companyBenefit.length > 0 ? companyBenefit.split(',').map((o, i) => (
                                                    <span key={i}>{o}</span>
                                                )) : ''
                                            }
                                        </div>
                                    </div>
                                    <div className={style.description}>
                                        <p>发布时间：{createTime.substr(0, 10)}</p>
                                        <p>有效日期：{effectiveDate}</p>
                                        {/* <p>基本要求：年龄28~48 | 性别不限</p> */}
                                        <p>工作地点：{area}</p>
                                        <br />
                                        <p>职位描述：</p>
                                        <div dangerouslySetInnerHTML={{
                                            __html: description
                                        }}></div>
                                        {/* <p>2、按时更新区域内现有网点及客户基础资料、进销存数据、活动反馈等基本情况；</p>
                                        <p>3、按时更新终端竞品信息、本品与竞品销售数据；</p>
                                        <p>7、执行上级领导安排的其他任务。</p> */}
                                        <br />
                                        <p>工作地址：</p>
                                        <p>{address}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
                {
                    isShowApply ?
                        <Modal closable={false} visible={true} footer={null} width={750} onCancel={onHideModel}>
                            <div className={style.modelcontent}>
                                <div className={style.step1}>
                                    {/* <p className={style.title}>验证手机号</p> */}
                                    <div className={style.info}>
                                        <Input type="text" value={applyName} onChange={onChangeName} placeholder="请输入姓名" />
                                    </div>
                                    <div className={style.info}>
                                        <Input type="text" value={phone} onChange={onChangePhone} placeholder="请输入手机号码" />
                                        {isCorrent ? <span className={style.ts + " " + style.success}>有效手机号码</span> : null}
                                    </div>
                                    <div className={style.info + " " + style.yzm}>
                                        <Input type="text" value={code} onChange={onChangeCode} className={style.ipt} placeholder="请输入验证码" />
                                        <Button disabled={isDisabled} onClick={onGetCode} id="get_btn">点击发送验证码</Button>
                                        {isError ? <span className={style.ts + " " + style.error}>验证码输入错误</span> : null}
                                    </div>
                                    <Button className={style.submit + " " + style.sure} onClick={onApply}>确认</Button>
                                    <p className={style.tips}>投递须知：为了确保正常投递，请验证您的手机号 </p>
                                </div>
                            </div>
                        </Modal>
                        : null
                }
                {
                    isShowUpload ?
                        <Modal closable={false} visible={true} footer={null} width={750} onCancel={onHideUpload}>
                            <div className={style.modelcontent}>
                                <div className={style.step2}>
                                    <p className={style.title2}>校验成功！</p>
                                    <p className={style.subtitle}>您现在可以上传附件简历</p>
                                    <Button onClick={this.onDownLoad} className={style.upbtn + " " + style.red}>下载附件模板</Button>
                                    <Upload accept=".xls,.xlsx,.doc,.docx,.ppt,.pdf" beforeUpload={onUpload} ><Button className={style.upbtn}>上传附件简历</Button></Upload>
                                    <p>仅支持上传，excel、word、ppt、pdf 格式的文件</p>
                                </div>
                            </div>
                        </Modal>
                        : null
                }
            </div >
        );
    }
}