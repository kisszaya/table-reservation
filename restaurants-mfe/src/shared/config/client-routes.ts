export enum PUBLIC_CLIENT_PATHS {
  RESTAURANTS = 'restaurants',
  RESERVES = 'reserves',
}

export const PUBLIC_PATH = {
    [PUBLIC_CLIENT_PATHS.RESTAURANTS]: '/',
    [PUBLIC_CLIENT_PATHS.RESERVES]: '/reserves'
}
