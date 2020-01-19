import 'babel-polyfill';
import './style/app.css';
import $ from 'jquery';
import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from 'store/reducer';
import HomePage from 'homepage/HomePage';

let middleware = process.env.NODE_ENV === 'development' ? applyMiddleware(thunk, logger) : applyMiddleware(thunk);
const store = createStore(reducer, middleware);

//全局ajax处理事件,请求完成时
// $(document).ajaxComplete((event, xhr, settings) => {
//     let { status } = xhr;
//     try {
//         if (status === 200) {

//         } else {
//             message.destroy();
//             if (status > 400) {
//                 message.error('服务异常');
//             } else {
//                 message.error('网络异常');
//             }
//         }
//     } catch (e) {
//         console.log(e);
//     }
// });

// (function (a, h, c, b, f, g) { a["UdeskApiObject"] = f; a[f] = a[f] || function () { (a[f].d = a[f].d || []).push(arguments) }; g = h.createElement(c); g.async = 1; g.charset = "utf-8"; g.src = b; c = h.getElementsByTagName(c)[0]; c.parentNode.insertBefore(g, c) })(window, document, "script", "https://assets-cli.udesk.cn/im_client/js/udeskApi.js", "ud");
// ud({
//     "code": "2kk5c247",
//     "pos_flag": "vrb",
//     "link": "https://jnchun.udesk.cn/im_client/?web_plugin_id=109381",
//     "language": "zh-cn", //语言-英文
//     "targetSelector": "#ontab",
// });

ReactDom.render(
    <Provider store={store}>
        <HomePage />
    </Provider>,
    document.getElementById('root')
);

if (module.hot) module.hot.accept();