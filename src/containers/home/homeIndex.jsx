import React, {Component} from 'react'; // 引入了React和PropTypes
import logo from '../../assets/logo.png';
import './index.less';
import {showTip} from '../../redux/action';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';


/* 以类的方式创建一个组件 */
class Main extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            checked: true
        };
    }

    componentDidMount() {
        this.showTip = this.props.showTip;
    }

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
        browserHistory.push('/info')
    }

    show(a) {
        this.showTip(a);
        setTimeout(() => {
            this.showTip({text: '', show: false})
        }, 1500)
    }

    render() {
        return (
            <div>
                <div className="imgBox">
                    <img src={logo} alt=""/>
                </div>
                <div className="weui-cells weui-cells_form">
                    <div className="weui-cell">
                        <div className="weui-cell__hd"><label className="weui-label">手机号</label></div>
                        <div className="weui-cell__bd">
                            <input className="weui-input" ref="tel" type="number" pattern="[0-9]*"
                                   placeholder="请输入手机号"/>
                        </div>
                    </div>
                    <div className="weui-cell weui-cell_vcode">
                        <div className="weui-cell__hd">
                            <label className="weui-label">验证码</label>
                        </div>
                        <div className="weui-cell__bd">
                            <input className="weui-input" ref="checkcode" type="number" placeholder="请输入验证码"/>
                        </div>
                        <div className="weui-cell__ft">
                            <button className="weui-vcode-btn">获取验证码</button>
                        </div>
                    </div>
                    <div className="weui-cell">
                        <div className="weui-cell__hd"><label className="weui-label">密码</label></div>
                        <div className="weui-cell__bd">
                            <input className="weui-input" type="password" ref="psw" placeholder="设置6位以上登录密码"/>
                        </div>
                    </div>
                </div>
                <label className="weui-agree">
                    <input id="weuiAgree" type="checkbox" checked={this.state.checked} value={1}
                           onChange={() => this.handleChange()} className="weui-agree__checkbox"/>
                    <span className="weui-agree__text">
                            已阅读并同意<a>《连心医疗用户协议》</a>
                    </span>
                </label>
                <div className="weui-btn-area">
                    <a className="weui-btn weui-btn_primary" onClick={() => this.submit()}>下一步</a>
                </div>
            </div>
        );
    }
}
let select = state => {
    return state
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        showTip: showTip
    }, dispatch);
}

export default connect(select, mapDispatchToProps)(Main);