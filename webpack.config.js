const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const config = (env, options) => ({
    output: {
        filename:
            options.mode === 'development'
                ? '[name].js'
                : '[name][chunkhash].js',
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    options.mode === 'production'
                        ? MiniCssExtractPlugin.loader
                        : 'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins() {
                                return [autoprefixer, cssnano];
                            },
                        },
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            {
                test: /\.woff|woff2$/,
                loader: 'file-loader',
            },
        ],
    },

    devtool: 'source-map',

    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name][contenthash].css',
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: 'body',
        }),
        options.mode === 'development'
            ? new webpack.HotModuleReplacementPlugin()
            : () => {},
    ],
});

module.exports = config;
