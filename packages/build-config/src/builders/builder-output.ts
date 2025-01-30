import { Configuration } from "webpack";
import type { BuilderOutputProps } from "./shared";
import { filenameTypesDefault } from "./shared";

export const builderOutput = (
  options: BuilderOutputProps,
): Configuration["output"] => {
  const { path, filename = filenameTypesDefault } = options;

  return {
    path,
    filename,
    clean: true,
  };
};
