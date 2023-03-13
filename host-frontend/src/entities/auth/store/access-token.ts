import { createEvent, createStore } from "effector";

const setAccessToken = createEvent<string>();
const removeAccessToken = createEvent();

const $accessToken = createStore<string>("")
  .on(setAccessToken, (_, payload) => payload)
  .reset(removeAccessToken);

export { $accessToken, setAccessToken, removeAccessToken };
