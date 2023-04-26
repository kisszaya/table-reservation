export enum BUILD_MODE {
  PROD = 'production',
  DEV = 'development',
}

export enum PROJECT_VARIANT {
  FRONTEND = 'frontend',
  STORYBOOK = 'storybook',
  JEST = 'jest'
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
  apiUrl?: string
}

export interface IBuildOptions {
  mode: BUILD_MODE
  paths: IBuildPaths
  isDev: boolean
  port: number
  apiUrl: string
  project: PROJECT_VARIANT
}
