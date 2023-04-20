import type webpack from 'webpack'

import { type IBuildOptions } from './types/config'
import { cssLoader } from './loaders/css-loader'
import { svgLoader as buildSvgLoader } from './loaders/svg-loader'

export const loaders = (options: IBuildOptions): webpack.RuleSetRule[] => {
    const { isDev } = options

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    }

    const svgLoader = buildSvgLoader()

    const scssLoader = cssLoader(isDev)

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader'
            }
        ]
    }

    return [fileLoader, svgLoader, typescriptLoader, scssLoader]
}
