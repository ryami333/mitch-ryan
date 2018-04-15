const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = (env, mode) => ({
    output: {
        filename: mode === "development" ? "[name].js" : "[name][chunkhash].js"
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: "babel-loader"
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: function() {
                                return [
                                    require("autoprefixer"),
                                    require("cssnano")
                                ];
                            }
                        }
                    },
                    "sass-loader"
                ]
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            },
            {
                test: /\.woff|woff2$/,
                loader: "file-loader"
            }
        ]
    },

    devtool: "source-map",

    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html",
            inject: "body"
        }),
        mode === "development"
            ? new webpack.HotModuleReplacementPlugin()
            : () => {}
    ]
});

module.exports = config;
