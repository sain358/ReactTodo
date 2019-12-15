const path = require('path');

module.exports = {
    entry: './app/app.jsx',
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
            Main: path.resolve(__dirname, './app/components/Main.jsx')
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
    devtool: 'cheap-module-eval-source-map'
};
