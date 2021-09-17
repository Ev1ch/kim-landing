const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const Sources = {
    HTML: path.resolve(__dirname, 'src'),
    JS: path.resolve(__dirname, 'src/js'),
    SCSS: path.resolve(__dirname, 'src/scss'),
    ASSETS: path.resolve(__dirname, 'src/assets'),
};

const Build = {
    ROOT: path.resolve(__dirname, 'dist'),
    HTML: path.resolve(__dirname, 'dist'),
    JS: path.resolve(__dirname, 'dist/js'),
    CSS: path.resolve(__dirname, 'dist/css'),
    ASSETS: path.resolve(__dirname, 'dist/assets'),
};

module.exports = {
    entry: [Sources.JS + '/index.js', Sources.SCSS + '/index.scss'],
    output: {
        path: Build.ROOT,
        filename: 'js/[name].bundle.js',
    },
    devServer: {
        port: 3000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: Sources.HTML + '/index.html',
            filename: Build.HTML + '/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: Sources.ASSETS,
                    to: 'assets',
                    noErrorOnMissing: true,
                },
            ],
        }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ],
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            url: false,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
            },
        ],
    },
};
