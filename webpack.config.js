const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const path = require('path');

const config = (env, options) => ({
    output: {
        filename:
            options.mode === 'development'
                ? '[name].js'
                : '[name][chunkhash].js',
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
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
        options.mode === 'production'
            ? new BundleAnalyzerPlugin({
                  analyzerMode: 'static',
                  openAnalyzer: false,
                  reportFilename: path.resolve(
                      __dirname,
                      './stats/report.html',
                  ),
              })
            : () => {},
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: 'body',
        }),
        new PrerenderSPAPlugin({
            staticDir: path.join(__dirname, 'dist'),
            routes: ['/'],
        }),
        options.mode === 'development'
            ? new webpack.HotModuleReplacementPlugin()
            : () => {},
    ],
});

module.exports = config;
