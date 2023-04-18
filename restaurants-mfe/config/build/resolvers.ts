import type webpack from 'webpack'

import { type IBuildOptions } from './types/config'

export const resolvers = ({ paths }: IBuildOptions): webpack.ResolveOptions => {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {}
    }
}
