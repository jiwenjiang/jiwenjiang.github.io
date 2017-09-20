import React from 'react'; // react核心
import {Router, Route, Redirect, IndexRoute, browserHistory} from 'react-router'; // 创建route所需
// import Config from '../config/index';
import layout from '../component/layout/layout'; // 布局界面


// 快速入门
const home = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../containers/home/homeIndex').default)
    }, 'home');
}

const info = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../containers/info/index').default)
    }, 'info');
}

const selectHos = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../containers/info/hospital').default)
    }, 'selectHos');
}

// const selectDe = (location, cb) => {
//     require.ensure([], require => {
//         cb(null, require('../containers/info/department').default)
//     }, 'selectDe');
// }


const RouteConfig = (
    <Router history={browserHistory}>
        <Route path="/home" component={layout}>
            <IndexRoute getComponent={home}/>
            <Route path="/home" getComponent={home}></Route>
            <Route path="/info" getComponent={info}></Route>
            <Route path="/selectHos/:id" getComponent={selectHos}></Route>
        </Route>
        <Redirect from="*" to="/home"/>
    </Router>
);

export default RouteConfig;
