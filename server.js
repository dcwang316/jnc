const fs = require('fs');
const path = require('path');
const express = require('express');
const proxy = require('http-proxy-middleware');

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('./webpack.config');

let app = new express();
let port = 3001;

if (process.env.NODE_ENV === 'development') {
    //前端配置
    webpackConfig.entry.main.unshift('webpack-hot-middleware/client?reload=true');
    let compiler = webpack(webpackConfig);
    app.use(webpackDevMiddleware(compiler, { publicPath: webpackConfig.output.publicPath }));
    app.use(webpackHotMiddleware(compiler));

    app.use('/jnc', proxy({
        target: 'http://jnc.quduoduo.cc/jnc-manage/',
        changeOrigin: true
    }));
}

app.use(express.static(path.join(__dirname, 'dev')));
app.use((req, res, next) => {
    res.sendFile(path.resolve(__dirname, './dev/index.html'));
});
app.listen(port, error => console.log(error ? error : 'success'));
