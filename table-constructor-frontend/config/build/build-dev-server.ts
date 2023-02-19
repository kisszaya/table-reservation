import { IBuildOptions } from "./types/config";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export const buildDevServer = (
  options: IBuildOptions
): DevServerConfiguration => {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true,
  };
};
