/**
 * webpack config 4.0
 * author: xyh
 * date: 2019-5-27 17:27
 */
 const path = require('path');
 const HtmlWebpackPlugin = require("html-webpack-plugin");
 const CleanWebpackPlugin = require("clean-webpack-plugin");

 const pathConfigModel = ( pathUrl ) => {
    return path.resolve(__dirname + pathUrl);
 };

 module.exports = {
     mode: "development",
     entry: pathConfigModel( '/index.js' ),
     output: {
        path: pathConfigModel ('/dist'),
        filename: "[name].js",
        publicPath: 'dist'      
    },
     module: {
         rules: [
             {
               test: /\.js$/,
                 exclude: /node_modules/,
                 use: [
                   {
                     loader: "babel-loader"
                   },
               ]
             },
             {
                 test: /\.css$/,
                 use: [
                     'style-loader',
                     "css-loader",
                     "postcss-loader"
                 ]
             },
             {
                 test: /\.scss$/,
                 use: [
                     'style-loader',
                     "css-loader",
                     'sass-loader'
                 ]
             },
             {
                 test: /\.(png|jpg|gif|svg)$/i,
                 use: [
                     {
                         loader: 'file-loader',
                         options: {
                             name: '[name].[ext]',
                             limit: '8192',
                             outputPath: 'images/'
                         },
                     }
                 ]
             }
         ]
     },
     plugins: [
        new HtmlWebpackPlugin({
            file: "index.html",
            template: pathConfigModel("/index.html"),
            minify:{
                minimize: true,
                removeComments: true,
                collapseWhitespace: true,
                minifyCSS: true,
                minifyJS: true
            }
        }),
        new CleanWebpackPlugin({
            path: pathConfigModel("/dist/*.js")
        })
    ],
    devServer: {
        contentBase: pathConfigModel("/dist"),
        hot: true,
        compress: true,
        host: "localhost",
        port: 8088
    },
 };