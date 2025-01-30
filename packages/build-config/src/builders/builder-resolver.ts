import type { Configuration } from "webpack";
import type { BuilderResolver } from "./shared/types/types";

export const builderResolver = ({
  src,
}: BuilderResolver): Configuration["resolve"] => ({
  extensions: [".ts", ".tsx", ".js"],
  alias: {
    "@": src,
  },
});
