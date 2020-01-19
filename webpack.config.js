const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

const pathConfig = {
    root: path.resolve(__dirname, './webapp/'),
    components: path.resolve(__dirname, './webapp/components'),
    layout: path.resolve(__dirname, './webapp/layout'),
    view: path.resolve(__dirname, './webapp/view'),
    store: path.resolve(__dirname, './webapp/store'),
};

const isPrd = process.env.NODE_ENV === 'production';
// const ROUTE_PREFIX = isPrd ? '/pc' : '';
const ROUTE_PREFIX = '';
const targ = isPrd ? 'dist' : 'dev';

let config = {
    entry: {
        main: ['./webapp/app.js'],
        vendor: [
            "jquery", "moment", "universal-cookie", "prop-types", "react", "react-dom", "react-router-dom"
        ],
    },

    output: {
        publicPath: `/jnc/passets/`,
        // publicPath: `${ROUTE_PREFIX}/passets/`,
        path: path.resolve(__dirname, `./${targ}/passets`),
        filename: isPrd ? '[name].[chunkhash].js' : '[name].js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'stage-0', 'react', 'babel-polyfill'],
                        plugins: [
                            ['react-hot-loader/babel'],
                            ['import', { "libraryName": "antd", "style": true }]
                        ]
                    }
                }],
                include: [pathConfig.root],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                module: true,
                                localIdentName: '[local]--[hash:base64:6]'
                            }
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
                })
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader',
                        {
                            loader: 'less-loader',
                            options: {
                                sourceMap: true,
                                modifyVars: {
                                    ['@primary-color']: '#f77667',
                                    ['@border-radius-base']: 0,
                                    ['@border-radius-sm']: 0,
                                    ['@icon-url']: JSON.stringify(`${ROUTE_PREFIX}/iconfont/iconfont`)
                                }
                            }
                        }
                    ]
                })
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ],
            },
            {
                test: /\.(mp4|ogg|svg)$/,
                use: ['file-loader']
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                use: ['url-loader?limit=10000&mimetype=application/font-woff']
            },
            {
                test: /\.(ttf|TTF)(\?v=\d+\.\d+\.\d+)?$/,
                use: ['url-loader?limit=10000&mimetype=application/octet-stream']
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                use: ['file-loader']
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: ['url-loader?limit=10000&mimetype=image/svg+xml']
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
                ROUTE_PREFIX: JSON.stringify(ROUTE_PREFIX),
            }
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            React: 'react',
            ReactDOM: 'react-dom',
            PropTypes: 'prop-types'
        }),
        new webpack.HashedModuleIdsPlugin(),
        new ExtractTextPlugin({
            filename: "style.[chunkhash].css",
            disable: !isPrd,
            allChunks: true,
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "manifest",
            minChunks: Infinity
        }),
        new HtmlWebpackPlugin({
            filename: '../index.html',
            template: './webapp/index.html'
        })
    ],

    resolve: {
        modules: [
            'node_modules',
            pathConfig.root,
            pathConfig.components,
            pathConfig.layout,
            pathConfig.view,
            pathConfig.store,
        ],
        alias: {
            'swiper': 'swiper/dist/js/swiper.js'
        }
    },
    devtool: 'source-map'
};

//处于生产环境
if (isPrd) {
    config.plugins.unshift(
        new CleanWebpackPlugin(['dist/passets/*']),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            comments: false,
            compress: {
                warnings: false,
                drop_console: true,
                collapse_vars: true,
                reduce_vars: true,
            },
            sourceMap: true
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.(js|css|html)$/,
            threshold: 10240,
            minRatio: 0.8
        })
    )
} else {//处于开发环境
    config.plugins.unshift(
        new webpack.HotModuleReplacementPlugin()
    )
}

module.exports = config;