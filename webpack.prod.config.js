const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const postCssPresetEnv = require('postcss-preset-env');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const smp = new SpeedMeasurePlugin();
const merge = require('webpack-merge');
const common = require('./webpack.common.config');

module.exports = (env) => {
    console.log(`Environment: ${env}; NODE_ENV: ${process.env.NODE_ENV}`);
    
    return smp.wrap(merge(common, {
        mode: env,
        devtool: 'source-map',
        output: {
            filename: 'scripts/[name].min.js',
        },
        module: {
            rules: [
                {
                    test: /\.(s)?css$/i,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                sourceMap: true,
                            }
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1, // in order to minify @imports of nested css files
                                sourceMap: true,
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                ident: 'postcss-2',
                                sourceMap: true,
                                minimize: true,
                                plugins: [
                                    autoprefixer(),
                                    cssnano({
                                        preset: ['default']
                                    }),
                                ]
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                ident: 'postcss-1',
                                sourceMap: true,
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
            // new PurgecssPlugin({
            //     paths: glob.sync(`${path.resolve(__dirname, 'src')}/**/*`, { nodir: true })
            // }),
            new MiniCssExtractPlugin({
                filename: 'styles/[name].min.css'
            }),
            new CopyWebpackPlugin([
                {
                    from: path.resolve(__dirname, 'src/assets/images'),
                    to: path.resolve(__dirname, 'dist/images')
                }
            ]),   
        ]
    }));
};