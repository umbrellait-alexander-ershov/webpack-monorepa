const path = require("path");

const tsLoader = {
  test: /\.tsx?$/,
  loader: "ts-loader",
  exclude: /node_modules/,
};

const swcLoader = {
  test: /\.(ts|tsx)$/,
  exclude: /(node_modules|bower_components)/,
  use: {
    loader: "swc-loader",
    options: {
      jsc: {
        parser: {
          syntax: "typescript",
          tsx: true,
          decorators: false,
          dynamicImport: true,
        },
        target: "es2015",
        transform: {
          react: {
            runtime: "automatic",
          },
        },
      },
      minify: true,
    },
  },
};

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "./src", "index.tsx"),
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].[contenthash].js",
  },
  module: {
    rules: [swcLoader],
  },
};
