import { createEffect, createEvent, forward } from "effector";
import { authApi } from "entities/auth";

import { removeAccessToken } from "./access-token";

const logout = createEvent();
const _logoutFx = createEffect(async () => {
  await authApi.logout();
});

forward({ from: logout, to: removeAccessToken });

forward({ from: logout, to: _logoutFx });

export { logout };
