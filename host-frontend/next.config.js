const {NextFederationPlugin} = require('@module-federation/nextjs-mf');

module.exports = {
    webpack(config) {
        config.plugins.push(
            new NextFederationPlugin({
                name: 'host',
                filename: 'remoteEntry.js',
                remotes: {
                    tableConstructor: `tableConstructor@http://localhost:3001/remoteEntry.js`,
                },
            })
        );

        return config;
    },
};