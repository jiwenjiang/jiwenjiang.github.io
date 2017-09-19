import React, {Component} from 'react'; // 引入了React和PropTypes

// import {Link} from 'react-router';


// 公共面包屑


// import {Row,Col} from 'antd';


/* 以类的方式创建一个组件 */
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subtitle: '影像详情',
            status: 0
        };

    }

    componentDidMount() {
        document.title = 'Amazing Page';
    }


    render() {
        return (
            <div className="home-container">
                {this.props.children}
            </div>
        );
    }
}

export default Main;