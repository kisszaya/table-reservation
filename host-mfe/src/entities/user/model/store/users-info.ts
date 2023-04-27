import { Responses } from "kisszaya-table-reservation/lib/responses";
import { createStore } from "effector";

import { USER_INFO_STATUS } from "../../const";
import { findUserByEmailFx } from "../effects";
import { resetUsersInfoStatus } from "../events";

/*** Types ***/

type IUsersInfo = Record<string, Responses.GetUserInfo>;

/*** Users info ***/

const $usersInfo = createStore<IUsersInfo>({});
$usersInfo.on(findUserByEmailFx.done, (state, payload) => ({
  ...state,
  [payload.result.data.email]: payload.result.data,
}));

/*** Users info status ***/

const $usersInfoStatus = createStore<USER_INFO_STATUS>(USER_INFO_STATUS.IDLE);
const $usersInfoIsLoading = findUserByEmailFx.pending;
$usersInfoStatus.on(resetUsersInfoStatus, () => USER_INFO_STATUS.IDLE);
$usersInfoStatus.on(findUserByEmailFx.done, () => USER_INFO_STATUS.FOUND);
$usersInfoStatus.on(findUserByEmailFx.fail, () => USER_INFO_STATUS.NOT_FOUND);

/*** Exports ***/

export { $usersInfoStatus, $usersInfo, $usersInfoIsLoading };
