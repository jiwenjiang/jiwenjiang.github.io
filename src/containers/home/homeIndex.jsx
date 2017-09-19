import React, {Component} from 'react'; // 引入了React和PropTypes
import logo from '../../assets/logo.png';
import './index.less';
// import {showTip} from '../../redux/action';
import {connect} from 'react-redux';


// 公共面包屑


// import {Row,Col} from 'antd';


/* 以类的方式创建一个组件 */
class Main extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            checked: true
        };
    }

    componentDidMount() {
        // const {showTip} = this.props;
        console.log(this.props)
    }

    handleChange() {
        this.setState({checked: !this.state.checked});
    }


    submit() {
        if (!this.refs.tel.value) {
            console.log(66666);
            this.props.Showtip('用户名必填')
        }
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
                            <input className="weui-input" ref="tel" type="tel" pattern="[0-9]*" placeholder="请输入手机号"/>
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
                已阅读并同意<a >《连心医疗用户协议》</a>
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

function mapDispatchToProps() {
    // showTip
}

export default (connect(select, mapDispatchToProps))(Main);