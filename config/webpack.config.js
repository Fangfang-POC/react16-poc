const path = require('path');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const packageJson = require('../package.json');
module.exports = (env) => {
    console.log(env);
    return {
        mode: 'development',
        // entry: {
        //     index: path.resolve(__dirname, '../src/cm.js'),
        // },
        output: {
            filename: '[name].bundle.js',
            path: path.resolve(__dirname, '../dist'),
            libraryTarget: "commonjs2",
            // publicPath: '/hello/',
        },
        module: {
            rules: [{
                test: /\.jsx?$/,
                use: 'babel-loader',
                // options: {
                //     presets: ['react'],
                // },
                exclude: /node_modules/,
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },]
        },
        // plugins: [
        //     new WebpackManifestPlugin({
        //         fileName: `${packageJson.name}.manifest.json`,
        //     }),
        // ]
    }
}