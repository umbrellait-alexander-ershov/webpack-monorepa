import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

import type { BuilderDevServerProps } from "./shared";

export const buildDevServer = ({
  port,
  isOpenServer,
}: BuilderDevServerProps): DevServerConfiguration => {
  return {
    port,
    // Включение HMR + добавить плагин для react
    // react-fast-refresh
    hot: true,
    open: isOpenServer === "yes",
    compress: true,
    // если раздавать статику через nginx, то надо делать проксирование на Index.html
    historyApiFallback: true,
  };
};
