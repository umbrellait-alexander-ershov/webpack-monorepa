import { join, dirname } from "path";
import { StorybookConfig } from "@storybook/react-webpack5";

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
  stories: [
    "../packages/shared/src/ui-kit/**/stories/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    getAbsolutePath("@storybook/addon-webpack5-compiler-swc"),
    getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-interactions"),
  ],
  webpackFinal: async (config) => {
    // Обработка CSS
    config.module.rules.push({
      test: /\.css$/,
      use: [
        "style-loader", // вставляет стили в DOM
        "css-loader", // интерпретирует @import и url() как import/require()
      ],
    });

    // Обработка SCSS (если используешь SCSS)
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            modules: {
              namedExport: false,
            },
          },
        },
        "sass-loader", // поддержка SCSS
      ],
    });

    return config;
  },
  framework: {
    name: getAbsolutePath("@storybook/react-webpack5"),
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: "automatic",
        },
      },
    },
  }),
};

export default config;
