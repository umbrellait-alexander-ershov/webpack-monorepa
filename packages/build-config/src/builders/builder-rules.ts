import { Configuration } from "webpack";
import { BuilderRules } from "./shared/types/types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const builderRules = ({
  mode,
}: BuilderRules): Configuration["module"]["rules"] => {
  const isProd = mode === "production";

  const sassLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isProd ? MiniCssExtractPlugin.loader : "style-loader",
      {
        loader: "css-loader",
        options: {
          modules: {
            namedExport: false,
          },
        },
      },
      "sass-loader",
    ],
  };

  const cssLoader = {
    test: /\.css$/i,
    use: [
      isProd ? MiniCssExtractPlugin.loader : "style-loader",
      {
        loader: "css-loader",
        options: {
          modules: {
            namedExport: false,
          },
        },
      },
    ],
  };

  const assetsLoader = {
    test: /\.png/,
    type: "asset/resource",
  };

  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const esbuildLoader = {
    test: /\.tsx?$/,
    loader: "esbuild-loader",
    options: {
      target: "es2015",
    },
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

  return [sassLoader, cssLoader, assetsLoader, swcLoader];
};
