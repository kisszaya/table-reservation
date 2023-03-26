import { createEvent, createStore, forward } from "effector";
import { Responses } from "kisszaya-table-reservation/lib/responses";
import { createEffect } from "effector/effector.mjs";

import { usersApi } from "..";

/**
 * Types
 **/
type IUsersInfo = Record<string, Responses.GetUserInfo>;

export enum USERS_INFO_STATUS {
  NOT_FOUND = "not_found",
  IDLE = "idle",
}

/**
 * Users info
 **/
const _findUserByEmailFx = createEffect(async (email: string) => {
  return await usersApi.userInfoByEmail(email);
});

const findUserByEmail = createEvent<string>();

forward({ from: findUserByEmail, to: _findUserByEmailFx });
const $usersInfo = createStore<IUsersInfo>({});
$usersInfo.on(_findUserByEmailFx.done, (state, payload) => ({
  ...state,
  [payload.result.data.email]: payload.result.data,
}));

/**
 * Users info status handlers
 **/
const resetUsersInfoStatus = createEvent();

const $usersInfoStatus = createStore<USERS_INFO_STATUS>(USERS_INFO_STATUS.IDLE);
const $isUsersInfoLoading = _findUserByEmailFx.pending;

$usersInfoStatus.on(
  [_findUserByEmailFx.done, resetUsersInfoStatus],
  () => USERS_INFO_STATUS.IDLE
);
$usersInfoStatus.on(_findUserByEmailFx.fail, () => USERS_INFO_STATUS.NOT_FOUND);

export const events = {
  findUserByEmail,
  resetUsersInfoStatus,
};

export const stores = {
  $usersInfoStatus,
  $usersInfo,
  $isUsersInfoLoading,
};
