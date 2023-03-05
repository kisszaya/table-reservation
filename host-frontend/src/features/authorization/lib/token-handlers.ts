import { authStore } from "entities/auth";
import { api, apiWithoutInterceptors } from "shared/api";

export const updateToken = (accessToken: string) => {
  api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  apiWithoutInterceptors.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  authStore.setAccessToken(accessToken);
};

export const getTokenFromBearer = (accessToken: string) => {
  return accessToken.split(" ")[1];
};
