const { i18n } = require("./next-i18next.config");

const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

module.exports = {
  experimental: {
    appDir: true,
  },
  i18n,
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "host",
        filename: "remoteEntry.js",
        remotes: {
          tableConstructor: `tableConstructor@http://localhost:3001/remoteEntry.js`,
        },
      })
    );

    return config;
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/landing",
        permanent: true,
      },
    ];
  },
  pageExtensions: ["page.tsx", "endpoint.ts"],
};
