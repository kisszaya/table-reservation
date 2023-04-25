import type webpack from 'webpack'
import path from 'path'

import { buildWebpackConfig } from './config/build/webpack-config'
import {
    BUILD_MODE,
    type IBuildEnv,
    type IBuildPaths
} from './config/build/types/config'

const paths: IBuildPaths = {
    build: path.resolve(__dirname, 'dist'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src')
}

export default (env: IBuildEnv) => {
    const mode = env.mode ?? BUILD_MODE.DEV

    const isDev = mode === BUILD_MODE.DEV
    const port = env.port ?? 3000
    const apiUrl = env.apiUrl ?? 'http://localhost:8000'

    const config: webpack.Configuration = buildWebpackConfig({
        paths,
        mode,
        isDev,
        port,
        apiUrl
    })

    return config
}
