const path = require('path');
const dotenv = require('dotenv');
const webpack = require('webpack');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
dotenv.config({path: __dirname + '/config/' + process.env.NODE_ENV + '.env'});

module.exports = {
    entry: './app/app.jsx',
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'bundle.js'
    },
    resolve: {
        modules: [
            'node_modules',
            './app/components',
            './app/api',
            './app'
        ],
        alias: {
            styles: path.resolve(__dirname, './app/styles/app.scss'),
            actions: path.resolve(__dirname, './app/actions/actions.jsx'),
            reducers: path.resolve(__dirname, './app/reducers/reducers.jsx'),
            store: path.resolve(__dirname, './app/store/index.jsx'),
        },
        extensions: ['*', '.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(process.env)
        })
    ],
    devtool: process.env.NODE_ENV === 'production' ? undefined : 'cheap-module-eval-source-map'
};
