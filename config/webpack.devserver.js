const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { merge } = require('webpack-merge');
const htmlwebpackPlugin = new HtmlWebpackPlugin({
    filename: 'index.html',
    inject: true,
    template: path.join(__dirname, '../public/index.html')
});

const devserverConfig = {
    entry: {
        main: path.resolve(__dirname, '../src/App.tsx'),
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'],  //resolve these extensions in order
    },
    target: 'web',
    devServer: {
        hot: true,
        liveReload: true,
        open: true,
    },
    plugins: [htmlwebpackPlugin],
}

const baseConfig = require('./webpack.config');
module.exports = merge(baseConfig(), devserverConfig);