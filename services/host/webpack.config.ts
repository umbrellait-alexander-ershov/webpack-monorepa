import {
  builder,
  type BuilderPath,
  type BuilderOptions,
  isOpenServerTypesDefault,
} from "@packages/build-config";

import webpack, { Configuration } from "webpack";

import path from "path";

import packageJson from "./package.json";

const webpackConfig = (env: any): Configuration => {
  const builderPaths: BuilderPath = {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    public: path.resolve(__dirname, "public"),
    entry: path.resolve(__dirname, "src", "index.tsx"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
  };

  const options: BuilderOptions = {
    paths: builderPaths,
    port: env.port ?? 3001,
    mode: env.mode ?? "development",
    analyzer: env.analyzer ?? false,
    isOpenServer: env.open ?? isOpenServerTypesDefault,
  };

  const SHOP_REMOTE_APP = "http://localhost:3002";
  const ADMIN_SHOP_REMOTE_APP = "http://localhost:3003";

  const config: Configuration = builder(options);

  config.plugins.push(
    new webpack.container.ModuleFederationPlugin({
      name: "host",
      filename: "remoteEntry.js",
      remotes: {
        shop: `shop@${SHOP_REMOTE_APP}/remoteEntry.js`,
        admin: `admin@${ADMIN_SHOP_REMOTE_APP}/remoteEntry.js`,
      },

      shared: {
        ...packageJson.dependencies,
        react: {
          eager: true,
        },
        "react-dom": {
          eager: true,
        },
        "react-router-dom": {
          eager: true,
        },
      },
    }),
  );

  return config;
};

export default webpackConfig;
