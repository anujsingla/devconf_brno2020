const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackMerge = require("webpack-merge");

module.export = ({ mode = 'production', presets = [] }) => {
    return webpackMerge({
        mode,
        module: {
            rules: [
              {
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
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
              }
            ]
        },
        input: {
            filename: 'index.js'
        },
        output: {
            filename: "bundle.js",
            chunkFilename: "[name].-chunk.js"
        },
    });
};