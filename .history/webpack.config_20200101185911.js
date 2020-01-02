const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackMerge = require("webpack-merge");
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);
const presetConfig = require("./build-utils/loadPresets");

module.export = ({ mode = 'production', presets = [] }) => {
    return webpackMerge({
        mode,
        module: {
            rules: [{
                test: /\.jpe?g$/,
                use: [
                  {
                    loader: "url-loader",
                    options: {
                      limit: 5000
                    }
                  }
                ]
              },
              {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            ]
        },
        resolve: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
        entry: {
            filename: '../src/index'
        },
        output: {
            filename: "bundle.js",
            chunkFilename: "[name].-chunk.js"
        },
        plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body',
            hash: true,
            chunksSortMode: 'dependency',
          }),
          new webpack.ProgressPlugin()]
    },
    modeConfig(mode),
    presetConfig({ mode, presets })
    );
};