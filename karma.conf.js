var webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
    config.set({
        browsers: ['Chrome'],
        singleRun: true,
        frameworks: ['jasmine'],
        files: ['app/tests/**/*.test.jsx'],
        preprocessors: {
            './tests/**/*.test.jsx': ['webpack', 'sourcemap'],
        },
        reporters: ['mocha'],
        webpack: webpackConfig,
        webpackMiddleware: {
            noInfo: true
        },
        browserNoActivityTimeout: 60000
    });
};