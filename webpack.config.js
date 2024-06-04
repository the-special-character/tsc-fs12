const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./index.js",
  plugins: [
    new HtmlWebpackPlugin({
      title: "yagnesh modh",
      template: "./public/index.html",
      filename: "index.html",
    }),
  ],
  output: {
    path: path.resolve(__dirname, "output"),
    filename: "main.js",
  },
  mode: "production",
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
    ],
  },
};
