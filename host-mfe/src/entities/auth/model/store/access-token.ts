import { createStore } from "effector";

import { setAccessToken, removeAccessToken } from "../events";

export const $accessToken = createStore<string>("")
  .on(setAccessToken, (_, payload) => payload)
  .reset(removeAccessToken);
