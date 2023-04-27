import {
  removeAccessToken,
  setAccessToken,
  updateTokensFx,
  $accessToken,
} from "./model";

export const authEvents = {
  removeAccessToken,
  setAccessToken,
  updateTokensFx,
};

export const authStore = {
  $accessToken,
};

export { AuthFormContainer } from "./ui";
