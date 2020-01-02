const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackMerge = require("webpack-merge");

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
              }
            ]
        },
        resolve: { extensions: [".ts", ".tsx"] },
        entry: {
            filename: 'src/index'
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
    });
};