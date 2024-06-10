const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./index.js",
  plugins: [
    new HtmlWebpackPlugin({
      title: "kush vaishnav",
      template: "./public/index.html",
      filename: "index.html",
    }),
  ],
  output: {
    path: path.resolve(__dirname, "output"),
    filename: "main.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      }
    ],
  },
};
