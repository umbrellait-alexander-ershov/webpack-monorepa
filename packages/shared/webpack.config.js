const path = require("path");

const tsLoader = {
  test: /\.tsx?$/,
  loader: "ts-loader",
  exclude: /node_modules/,
};

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "./src", "index.tsx"),
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].[contenthash].js",
  },
  module: {
    rules: [tsLoader],
  },
};
