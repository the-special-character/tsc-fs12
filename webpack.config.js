const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  entry: "./src",
  plugins: [
    new HtmlWebpackPlugin({
      title: "kush vaishnav",
      template: "./public/index.html",
      filename: "index.html",
    }),
    new MiniCssExtractPlugin(),
  ],

  output: {
    path: path.resolve(__dirname, "output"),
    filename: "main.js",
  },
  mode: "development",
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
    ],
  },
};
