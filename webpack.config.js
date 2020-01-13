const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackMerge = require("webpack-merge");
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);
const presetConfig = require("./build-utils/loadPresets");
const path = require('path');

console.log('path', path.resolve('./src'))

module.exports = ({ mode = 'production', presets = [] }) => {
    return webpackMerge({
        entry: './src/index.tsx',
        mode,
        module: {
            rules: [
              {
                test: /\.(ts|tsx)$/,
                use: 'ts-loader',
                exclude: /node_modules/,
              },
              {
                test: /\.(png|jpg|gif)$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192 // in bytes
                    }
                }]
              },
              { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
            ]
        },
        resolve: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
        devtool: 'inline-source-map',
        output: {
            filename: "bundle.js",
            chunkFilename: "[name]-chunk.js",
            path: path.resolve(__dirname, 'dist'),
        },
        plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
          }),
          new webpack.ProgressPlugin()]
    },
    modeConfig(mode),
    presetConfig({ mode, presets })
    );
};