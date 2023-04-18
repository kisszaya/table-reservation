import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {IBuildOptions} from "./types/config";

export const buildPlugins = (
    options: IBuildOptions
): webpack.WebpackPluginInstance[] => {
    const {paths, isDev, moduleFederation} = options;

    return [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css/[name].[contenthash:8].css",
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev)
        }),
        new webpack.container.ModuleFederationPlugin({
            name: moduleFederation.name,
            filename: moduleFederation.filename,
            exposes: moduleFederation.exposes,
            shared: {},
        })
    ];
};
