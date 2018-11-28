// can skip the "entry" field because by default it goes to src -> index.js
// can skip "output" field because by default it goes to dist -> main.js
// import HtmlWebpackPlugin from 'html-webpack-plugin';
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: "cheap-module-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.(pdf|jpg|png|gif|svg|ico)$/,
        use: [
          {
            loader: "url-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html"
    })
  ]
};
