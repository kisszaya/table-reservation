export const fileLoader = () => {
    return {
        test: /\.(png|jpe?g|gif|woff2)$/i,
        use: [
            {
                loader: 'file-loader'
            }
        ]
    }
}
