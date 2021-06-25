const path = require('path');
const { pathToFileURL } = require('url');
//const { HotModuleReplacementPlugin } = require('webpack');
const HtmlWepackPlugin = require('html-webpack-plugin');
//const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    devServer: {
        publicPath: 'http://localhost:8080/',
        proxy: {
            '*': 'http://localhost:3000'
        },
        hot: true,
        inline:true,
    },// end of devServer
    mode: process.env.NODE_ENV,
    entry: './client/index.js',
    output: {
        path: path.resolve(__dirname, 'build') ,
        filename: 'bundle.js'
    },//end of output
    resolve: {
      extensions: ['.js','.jsx']
    }, // end of resolve
    plugins:[
      new HtmlWepackPlugin({
        template: './index.html'
      })
    ], //end of plugins
    module:{
      rules: [
        {
          test: /\.js?/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env',
                '@babel/preset-react']
            }
          }
        },
        // {
        //   test: /.(css|scss)$/,
        //   exclude: /node_modules/,
        //   use: ['style-loader', 'css-loader'],
        // },
      ]//end of rules
        
    },//end of module
}


