import { createStore } from "effector";
import { AxiosError } from "axios";

import { getAxiosErrorMessage } from "shared/lib";

import { ADD_EMPLOYEE_STATUS } from "../../const";
import { addEmployeeFx } from "../effects";
import { resetAddEmployeeStatus } from "../events";

/*** status ***/
const $addEmployeeStatus = createStore<ADD_EMPLOYEE_STATUS>(
  ADD_EMPLOYEE_STATUS.IDLE
);

$addEmployeeStatus.on(addEmployeeFx.done, () => ADD_EMPLOYEE_STATUS.SUCCESS);
$addEmployeeStatus.on(addEmployeeFx.fail, () => ADD_EMPLOYEE_STATUS.ERROR);
$addEmployeeStatus.on(resetAddEmployeeStatus, () => ADD_EMPLOYEE_STATUS.IDLE);

/*** is loading ***/
const $addEmployeeIsLoading = addEmployeeFx.pending;

/*** error ***/
const $addEmployeeError = createStore<null | string>(null);
$addEmployeeError.on(addEmployeeFx.fail, (_, payload) => {
  return getAxiosErrorMessage(payload.error as AxiosError);
});
$addEmployeeError.on(resetAddEmployeeStatus, () => null);

export { $addEmployeeStatus, $addEmployeeIsLoading, $addEmployeeError };
