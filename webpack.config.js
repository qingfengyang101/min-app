/**
 * webpack config 4.0
 * author: xyh
 * date: 2019-5-27 17:27
 */

 const path = require('path');
 const HtmlWebpackPlugin = require("html-webpack-plugin");


 const pathConfigModel = ( pathUrl ) => {
    return path.resolve(__dirname + pathUrl);
 }

 module.exports = {
     mode: "production",
     entry: pathConfigModel( '/index.js' ),
     output: {
        path: pathConfigModel ('/dist'),
        filename: "[name].js",
        publicPath: 'dist'      
    },
    plugins: [
      new HtmlWebpackPlugin({
         file: "index.html",
         template: pathConfigModel("/index.html")
      })

    ],
    devServer: {
       contentBase: pathConfigModel("/dist"),
       hot: true,
       compress: true,
       host: "localhost",
       port: 8088
    },
 }