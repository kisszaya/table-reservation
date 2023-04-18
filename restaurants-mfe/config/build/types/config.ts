export enum BUILD_MODE {
  PROD = 'production',
  DEV = 'development',
}

export interface IBuildPaths {
  entry: string
  build: string
  html: string
  src: string
}

export interface IBuildEnv {
  mode?: BUILD_MODE
  port?: number
}

export interface IBuildOptions {
  mode: BUILD_MODE
  paths: IBuildPaths
  isDev: boolean
  port: number
}
