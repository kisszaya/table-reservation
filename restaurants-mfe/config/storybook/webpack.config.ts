// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import webpack from 'webpack'
import { type RuleSetRule } from 'webpack'
import path from 'path'

import { type IBuildPaths, PROJECT_VARIANT } from '../build/types/config'
import { cssLoader } from '../build/loaders/css-loader'
import { svgLoader } from '../build/loaders/svg-loader'
import { fileLoader } from '../build/loaders/file-loader'

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: IBuildPaths = {
        html: '',
        build: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src')
    }
    config.resolve.modules.push(paths.src)
    config.resolve.extensions.push('.ts', '.tsx')

    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        // eslint-disable-next-line @typescript-eslint/prefer-includes
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i }
        }

        return rule
    })

    config.module.rules.push(cssLoader(true))
    config.module.rules.push(svgLoader())
    config.module.rules.push(fileLoader())

    config.plugins.push(new webpack.DefinePlugin({
        __IS_DEV__: true,
        __API__: '',
        __PROJECT__: PROJECT_VARIANT.STORYBOOK
    }))

    config.resolve.modules = [
        path.resolve(__dirname, '../../src'),
        'node_modules'
    ]

    return config
}
