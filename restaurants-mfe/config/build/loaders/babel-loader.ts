import { type IBuildOptions } from '../types/config'

export const buildBabelLoader = (options: IBuildOptions) => {
    return {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: [
            {
                loader: require.resolve('babel-loader'),
                options: {
                    plugins:
                        [options.isDev &&
                        require.resolve('react-refresh/babel')]
                            .filter(Boolean)
                }
            }
        ]
    }
}
