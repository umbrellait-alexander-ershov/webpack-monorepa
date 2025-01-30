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
    port: env.port ?? 5050,
    mode: env.mode ?? "development",
    analyzer: env.analyzer ?? false,
    isOpenServer: env.open ?? isOpenServerTypesDefault,
  };

  const config: Configuration = builder(options);

  config.plugins.push(
    new webpack.container.ModuleFederationPlugin({
      // имя пакета
      name: "admin",

      // имя файла из которого будут экспортироваться модули
      filename: "remoteEntry.js",

      // модули, которые хотим экспортировать
      exposes: {
        "./router": "./src/app/router/router.tsx",
      },

      // нужные нам зависимости
      shared: {
        ...packageJson.dependencies,
        react: {
          // подгрузить библиотеку сразу
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
