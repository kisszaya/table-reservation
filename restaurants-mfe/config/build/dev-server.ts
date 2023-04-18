import {
    type Configuration as DevServerConfiguration
} from 'webpack-dev-server'

import { type IBuildOptions } from './types/config'

export const devServer = (options: IBuildOptions): DevServerConfiguration => {
    return {
        port: options.port,
        open: true,
        historyApiFallback: true,
        hot: true
    }
}
