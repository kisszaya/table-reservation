import type webpack from 'webpack'

import { type IBuildOptions } from './types/config'
import { cssLoader } from './loaders/css-loader'
import { svgLoader as buildSvgLoader } from './loaders/svg-loader'
import { fileLoader as buildFileLoader } from './loaders/file-loader'

export const loaders = (options: IBuildOptions): webpack.RuleSetRule[] => {
    const { isDev } = options

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    }

    const svgLoader = buildSvgLoader()

    const scssLoader = cssLoader(isDev)

    const fileLoader = buildFileLoader()

    return [fileLoader, svgLoader, typescriptLoader, scssLoader]
}
