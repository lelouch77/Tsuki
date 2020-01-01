const path = require("path");
const getEnvironmentVariable = require("./env-setup");
const webpack = require("webpack");

module.exports = {
  entry: path.resolve(__dirname, "../src/App.ts"),
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "../public")
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.ts$/,
        use: ["babel-loader"]
      }
    ]
  },
  plugins: [new webpack.DefinePlugin(getEnvironmentVariable())]
};
