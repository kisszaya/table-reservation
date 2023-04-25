import webpack from 'webpack'

import HTMLWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

import { type IBuildOptions } from './types/config'

export const plugins = (
    options: IBuildOptions
): webpack.WebpackPluginInstance[] => {
    const { paths, isDev, apiUrl } = options

    const plugins = [
        new HTMLWebpackPlugin({ template: paths.html }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl)
        })
    ]

    if (isDev) {
        plugins.push(new ReactRefreshPlugin())
        plugins.push(new BundleAnalyzerPlugin({
            openAnalyzer: false
        }))
    }

    return plugins
}
