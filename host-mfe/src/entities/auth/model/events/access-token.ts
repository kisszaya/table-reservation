import { createEvent } from "effector";

export const setAccessToken = createEvent<string>();
export const removeAccessToken = createEvent();
