const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const path = require('path')

module.exports = {
   entry: './src/index.js',
   output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].bundle.js'
   },
   devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
      port: 4200
   },
   plugins: [
      new HtmlWebpackPlugin({
         filename: 'index.html',
         template: './src/index.html'
      }),
      new MiniCssExtractPlugin({
         filename: 'style.css'
      })
   ],
   module: {
      rules: [
         {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
               loader: 'babel-loader',
               options: {
                  presets: ['@babel/preset-env']
               }
            }
         },
         {
            test: /\.s[ac]ss$/i,
            use: [
               // Creates `style` nodes from JS strings
               MiniCssExtractPlugin.loader,
               // Translates CSS into CommonJS
               'css-loader',
               // Compiles Sass to CSS
               'sass-loader',
            ],
         },
         {
            test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
            type: 'asset/resource',
         }
      ]
   }
}