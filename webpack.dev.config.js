const path = require('path');
const postCssPresetEnv = require('postcss-preset-env');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const smp = new SpeedMeasurePlugin();
const merge = require('webpack-merge');
const common = require('./webpack.common.config');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

module.exports = (env) => {
    console.log(`Environment: ${env}; NODE_ENV: ${process.env.NODE_ENV}`);
    
    return merge(common, {
        mode: env,
        devtool: 'cheap-eval-source-map',
        resolve: {
            alias: {
                'react-dom': '@hot-loader/react-dom'
            }
        },
        output: {
            filename: 'scripts/[name].min.js',
        },
        devServer: {
            port: 9000,
            historyApiFallback: true,
            contentBase: path.resolve(__dirname, 'dist'),
            compress: true,
            hot: true,
        },
        module: {
            rules: [
                {
                    test: /\.(s)?css$/i,
                    use: [
                        {
                            loader: 'style-loader',
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: false,
                            }
                        },
                        {
                            loader: 'fast-sass-loader',
                            options: {
                                sourceMap: false,
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                ident: 'postcss-1',
                                sourceMap: false,
                                plugins: [
                                    postCssPresetEnv(),
                                ]
                            }
                        }
                    ],
                },
            ]
        },
        plugins: [
            new HardSourceWebpackPlugin(),
        ]
    });
};