import React, {Component} from 'react'; // 引入了React和PropTypes
// import './index.less';
import {showTip} from '../../redux/action';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import url from '../../config/ip/image';
import xhr from '../../services/xhr/index';
import {Link} from 'react-router'


/* 以类的方式创建一个组件 */
class Main extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            checked: true
        };
        console.log(this.props)
    }

    componentDidMount() {
        this.showTip = this.props.showTip;
        this.getPosition();
        this.getJob();
        this.getProduct();
    }

    getPosition() {
        xhr.get(url.dicts, {bdType: 'position', applicationId: '0', mechanismId: '0'}, (data) => {
            this.setState({
                positions: data
            });
        })
    }

    getJob() {
        xhr.get(url.dicts, {bdType: 'user_type', applicationId: '0', mechanismId: '0'}, (data) => {
            this.setState({
                jobs: data
            });
        })
    }

    // getProduct() {
    //     xhr.get(url.dicts, {bdType: 'user_type', applicationId: '0', mechanismId: '0'}, (data) => {
    //         this.setState({
    //             jobs: data
    //         });
    //     })
    // }

    // changePos(e) {
    //     console.log(e);
    // }

    handleChange() {
        this.setState({checked: !this.state.checked});
    }


    submit() {
        // const {tipMsg} = this.props;
        // if (tipMsg.show) {
        //     return false;
        // }
        // if (!(/^1[34578]\d{9}$/.test(this.refs.tel.value))) {
        //     this.show({text: '手机号码必填', show: true});
        //     return false;
        // }
        //
        // if (!this.refs.checkcode.value) {
        //     this.show({text: '验证码必填', show: true});
        //     return false;
        // }
        // if (!this.refs.psw.value) {
        //     this.show({text: '密码必填', show: true});
        //     return false;
        // }

        console.log(this.state.posValue)
    }

    show(a) {
        this.showTip(a);
        setTimeout(() => {
            this.showTip({text: '', show: false})
        }, 1500)
    }

    render() {
        const hospital = this.props.Hospital.bdName;
        const department = this.props.Departments.bdName;
        const options_job = this.state.positions && this.state.positions.map(function (model) {
                return <option key={model.id} value={model.id}>{model.bdName}</option>
            });
        const options_pos = this.state.jobs && this.state.jobs.map(function (model) {
                return <option key={model.id} value={model.id}>{model.bdName}</option>
            });
        return (
            <div>
                <div className="weui-cells__title">基本信息</div>
                <div className="weui-cells">
                    <div className="weui-cell">
                        <div className="weui-cell__hd"><label className="weui-label">姓名</label></div>
                        <div className="weui-cell__bd">
                            <input className="weui-input" type="number" pattern="[0-9]*" placeholder="请填写姓名"/>
                        </div>
                    </div>
                    <div className="weui-cell weui-cell_select weui-cell_select-after">
                        <div className="weui-cell__hd">
                            <label htmlFor="" className="weui-label">职业</label>
                        </div>
                        <div className="weui-cell__bd">
                            <select className="weui-select" name="select2"
                                    onChange={event => this.setState({jobValue: event.target.value})}
                                    value={this.state.posValue}>
                                <option value=""></option>
                                {options_job}
                            </select>
                        </div>
                    </div>
                    <div className="weui-cell weui-cell_select weui-cell_select-after">
                        <div className="weui-cell__hd">
                            <label htmlFor="" className="weui-label">职称</label>
                        </div>
                        <div className="weui-cell__bd">
                            <select className="weui-select" name="select2"
                                    onChange={event => this.setState({posValue: event.target.value})}
                                    value={this.state.posValue}>
                                <option value=""></option>
                                {options_pos}
                            </select>
                        </div>
                    </div>

                </div>
                <div className="weui-cells__title">所在机构</div>
                <div className="weui-cells">
                    <Link className="weui-cell weui-cell_access" to="/selectHos/1">
                        <div className="weui-cell__bd">
                            <p>医院</p>
                        </div>
                        <div className="weui-cell__ft">{hospital || '请选择医院'}</div>
                    </Link>
                    <Link className="weui-cell weui-cell_access" to="/selectHos/2">
                        <div className="weui-cell__bd">
                            <p>科室</p>
                        </div>
                        <div className="weui-cell__ft">{department || '请选择科室'}</div>
                    </Link>
                </div>
                {/*<div className="weui-cells__title">申请产品</div>*/}
                {/*<div className="weui-cells weui-cells_checkbox">*/}
                {/*{}*/}
                {/*<label className="weui-cell weui-check__label" htmlFor="s11">*/}
                {/*<div className="weui-cell__hd">*/}
                {/*<input type="checkbox" className="weui-check" name="checkbox1" id="s11"/>*/}
                {/*<i className="weui-icon-checked"></i>*/}
                {/*</div>*/}
                {/*<div className="weui-cell__bd">*/}
                {/*<p>standard is dealt for u.</p>*/}
                {/*</div>*/}
                {/*</label>*/}
                {/*</div>*/}
                <div className="weui-btn-area">
                    <a className="weui-btn weui-btn_primary" onClick={() => this.submit()}>下一步</a>
                </div>

            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        Hospital: state.Hospital,
        Departments: state.Departments
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        showTip: showTip
    }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Main);