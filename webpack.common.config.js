const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const smp = new SpeedMeasurePlugin();

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    entry: {
        index: path.resolve(__dirname, 'src/index'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.(m?js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        context: path.resolve(__dirname, "src/assets/"),
                        outputPath: 'images',
                        publicPath: process.env.NODE_ENV === 'production' 
                            ? '../../' 
                            : '/images',
                        useRelativePaths: true,
                    },
                  },
                ],
            },
            {
                test: /\.(svg)$/i,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      mimetype: 'image/svg+xml',
                      limit: 1024 * 6
                    },
                  },
                ],
            },
            {
                test: /\.(woff|woff2)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            context: path.resolve(__dirname, "src/assets/"),
                            outputPath: 'fonts',
                            publicPath: process.env.NODE_ENV === 'production' 
                                ? '../../' 
                                : '/fonts',
                            useRelativePaths: true,
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html'),
            filename: 'index.html',
            title: 'Home',
            chunks: ['index']
        }),
        // new BundleAnalyzerPlugin(),
    ]
};