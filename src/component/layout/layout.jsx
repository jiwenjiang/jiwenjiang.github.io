import React, {Component} from 'react'; // 引入了React和PropTypes。PropTypes是用于检查props参数类型，可有可无，最好是有

import {is, fromJS} from 'immutable';



// 公共底部
// import {Lfooter} from './lfooter';

// 布局样式


// const SubMenu = Menu.SubMenu;

/**
 * (路由根目录组件，显示当前符合条件的组件)
 *
 * @class Main
 * @extends {Component}
 */
class Main extends Component {
    constructor(props) {
        super(props);
    }


    shouldComponentUpdate(nextProps, nextState) {
        return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState))
    }

    render() {
        // 这个组件是一个包裹组件，所有的路由跳转的页面都会以this.props.children的形式加载到本组件下
        return (
          <div>
              233333
              <div>{this.props.children}</div>
          </div>
        );
    }
}

export default Main;