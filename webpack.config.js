const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    clean: true,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    // compress: true,
    port: 9000,
    open: true,
    devMiddleware: {
      writeToDisk: true, //عشان اطهر ال dist
    },
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
        options:{
            minimize: true
        }
      },
      {
        test: /\.css$/i,
        exclude: /bootstrap\.min\.css$/i,
        use: ["style-loader", 
        {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            }
          }
        ,"css-loader"],
      },
      {
        test:/bootstrap\.min\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            }
          },
          "rtlcss-loader"
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator:{
          filename:"./images/[name][ext]",
        }
      },
      {
        test: /\.(eot|svg|woff|ttf)$/i, //عشان افحص الملف الصور
        type: 'asset/resource',
        generator:{ // يولد اسم الملف
          filename:"./src/fonts/static/[name][ext]", //عشان احدد اسم الملف الي راح يطلع في dist
        }
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    filename:"index.html",
    template:"./src/index.html"
}),
new MiniCssExtractPlugin({
    filename:"css/store.css",
  }),
  new CssMinimizerPlugin()
],
}