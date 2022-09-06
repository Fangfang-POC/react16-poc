const { merge } = require('webpack-merge');
const path = require('path');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const baseConfig = require('./webpack.config');
const packageJson = require('../package.json');

var manifest_shared_seed = {}; // create a shared seed object
const mainBuild = merge(baseConfig(), {
    entry: {
        main: path.resolve(__dirname, '../src/main.ts'),
    },
    plugins: [
        new WebpackManifestPlugin({
            seed: manifest_shared_seed, // set seed option
            fileName: `${packageJson.name}.manifest.json`,
            basePath: `${packageJson.name}/`,
            publicPath: 'https://cdn.example.com/',
            // generate: (seed, files, entries) => {
            //     console.log(entries);
            //     console.log(manifest_shared_seed);
            //     return { ...manifest_shared_seed, ...seed };
            // }
            useEntryKeys: true,
        }),
    ]
});
const secondaryBuild = merge(baseConfig(), {
    entry: {
        secondary: path.resolve(__dirname, '../src/secondary.ts'),
    },
    plugins: [
        // new CleanWebpackPlugin(),
        new WebpackManifestPlugin({
            seed: manifest_shared_seed, // set seed option
            fileName: `${packageJson.name}.manifest.json`,
            basePath: `${packageJson.name}/`,
        }),
    ]
});
module.exports = [mainBuild, secondaryBuild]