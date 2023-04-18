export enum BuildMode {
    DEV = "development",
    PROD = "production",
}

export interface IBuildPaths {
    entry: string;
    build: string;
    html: string;
    src: string;
}

export interface IBuildEnv {
    mode: BuildMode;
    port: number;
}

export interface IModuleFederationOptions {
    name: string,
    filename: string,
    exposes: Record<string, string>
}

export interface IBuildOptions {
    mode: BuildMode;
    paths: IBuildPaths;
    isDev: boolean;
    port: number;
    moduleFederation: IModuleFederationOptions
}
