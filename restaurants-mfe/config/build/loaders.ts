import type webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

import { type IBuildOptions } from './types/config'

export const loaders = (options: IBuildOptions): webpack.RuleSetRule[] => {
    const { isDev } = options

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    }

    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack']
    }

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
          loader: 'css-loader',
          options: {
              modules: {
                  auto: (resPath: string) => resPath.includes('.module.'),
                  localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:8]'
              : '[hash:base64:8]'
              }
          }
      },
      'sass-loader'
        ]
    }

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
