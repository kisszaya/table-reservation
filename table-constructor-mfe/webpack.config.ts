import webpack from "webpack";
import path from "path";

import {
    BuildMode,
    IBuildPaths,
    buildWebpackConfig,
    IBuildEnv, IModuleFederationOptions,
} from "./config/build";

const paths: IBuildPaths = {
    build: path.resolve(__dirname, "dist"),
    entry: path.resolve(__dirname, "src", "index.tsx"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
};

const moduleFederation: IModuleFederationOptions = {
    name: 'tableConstructor',
    filename: 'remoteEntry.js',
    exposes: {
        "./Scheme": "./src/pages/scheme"
    }
}

export default (env: IBuildEnv) => {
    const PORT = env.port || 3000;
    const MODE = env.mode || BuildMode.DEV;

    const isDev = MODE === BuildMode.DEV;

    const config: webpack.Configuration = buildWebpackConfig({
        mode: MODE,
        paths,
        isDev,
        port: PORT, moduleFederation
    });

    return config;
};
