import webpack from "webpack";

import { IBuildOptions } from "./types/config";

import { buildLoaders } from "./build-loaders";
import { buildPlugins } from "./build-plugins";
import { buildResolvers } from "./build-resolvers";
import { buildDevServer } from "./build-dev-server";

export const buildWebpackConfig = (
  options: IBuildOptions
): webpack.Configuration => {
  const { paths, mode, isDev } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    module: {
      rules: buildLoaders(options),
    },
    plugins: buildPlugins(options),
    resolve: buildResolvers(options),
    devtool: "inline-source-map",
    devServer: isDev ? buildDevServer(options) : undefined,
  };
};
