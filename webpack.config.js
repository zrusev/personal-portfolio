const path = require('path');
const glob = require('glob');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const postCssPresetEnv = require('postcss-preset-env');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const PurgecssPlugin = require('purgecss-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const smp = new SpeedMeasurePlugin();

const prodStylesConfig = [
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
                cssnano(),
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
];

const devStylesConfig = [
    {
        loader: 'style-loader',
    },
    {
        loader: 'css-loader',
        options: {
            sourceMap: true,
        }
    },
    {
        loader: 'fast-sass-loader',
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
];

const defaultStylesPlugins = [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public/index.html'),
        filename: 'index.html',
        title: 'Home',
        chunks: ['index']
    }),
    // new BundleAnalyzerPlugin(),
];

const prodStylesPlugins = [
    ...defaultStylesPlugins,
    new PurgecssPlugin({ //currently no matching event
        paths: glob.sync(`${path.resolve(__dirname, 'src')}/**/*`, { nodir: true })
    }),
    new MiniCssExtractPlugin({
        filename: 'styles/[name].min.css'
    }),
    // new CopyWebpackPlugin([
    //     {
    //         from: path.resolve(__dirname, 'src/assets/images/'),
    //         to: path.resolve(__dirname, 'dist/images')
    //     }
    // ]),
          
];

module.exports = (env) => {
    const isProduction = env === 'production';
    console.log(`Running in Environment: ${env}`);
    
    return smp.wrap({
        mode: env,
        devtool: isProduction
            ? 'source-map'
            : 'cheap-eval-source-map',
        resolve: {
            extensions: ['.js', '.jsx'],
            alias: {
            }
        },
        entry: {
            index: path.resolve(__dirname, 'src/index'),
        },
        output: {
            filename: 'scripts/[name].min.js',
            path: path.resolve(__dirname, 'dist'),
        },
        devServer: {
            port: 9000,
            historyApiFallback: true,
            contentBase: path.resolve(__dirname, 'dist'),
            compress: true,
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
                    test: /\.(s)?css$/i,
                    use: isProduction
                        ? prodStylesConfig
                        : devStylesConfig,
                },
                {
                    test: /\.(png|jpe?g|gif|ico)$/i,
                    use: [
                      {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            context: path.resolve(__dirname, "src/assets/"),
                            outputPath: 'images',
                            publicPath: '../images',
                            useRelativePaths: true,
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
                                publishPath: '../fonts',
                                useRelativePaths: true,
                            }
                        }
                    ]
                }
            ]
        },
        plugins: isProduction
            ? prodStylesPlugins
            : defaultStylesPlugins
    });
};