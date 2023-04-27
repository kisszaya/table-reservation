export enum PUBLIC_CLIENT_PATHS {
  RESTAURANTS = "restaurants",
  RESERVES = "reserves",
}

export enum PRIVATE_CLIENT_PATHS {
  RESTAURANTS = "restaurants",
  RESERVES = "reserves",
}

export const PUBLIC_PATH = {
  [PUBLIC_CLIENT_PATHS.RESTAURANTS]: "/",
  [PUBLIC_CLIENT_PATHS.RESERVES]: "/reserve-forbidden",
};

export const PRIVATE_PATH = {
  [PRIVATE_CLIENT_PATHS.RESTAURANTS]: "/",
  [PRIVATE_CLIENT_PATHS.RESERVES]: "/reserve",
};
