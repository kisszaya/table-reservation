import { createEvent, createStore } from "effector";

const setAccessToken = createEvent<string>();

const $accessToken = createStore<string>("").on(
  setAccessToken,
  (_, payload) => payload
);

export { $accessToken, setAccessToken };
