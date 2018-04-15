const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = (env, mode) => ({
    entry: path.resolve(process.cwd(), "./resources/js/main.js"),

    output: {
        path: path.resolve(process.cwd(), "public"),
        filename: mode === "development" ? "[name].js" : "[name][chunkhash].js"
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: "babel-loader",
                        query: {
                            presets: ["es2015", "stage-2", "react"]
                        }
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
                                    require("autoprefixer")({
                                        browsers: [
                                            "last 2 versions",
                                            "ie >= 10"
                                        ]
                                    }),
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
            template: "resources/index.html",
            inject: "body"
        }),
        mode === "development"
            ? new webpack.HotModuleReplacementPlugin()
            : () => {}
    ]
});

module.exports = config;
