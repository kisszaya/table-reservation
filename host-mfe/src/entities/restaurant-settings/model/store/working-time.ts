import { createStore } from "effector";

import { getWorkingTimeFx } from "../effects";
import { IWorkingTime } from "../types";
import { setWorkingTime } from "../events";

const $workingTime = createStore<IWorkingTime | null>(null);

$workingTime.on(
  getWorkingTimeFx.doneData,
  (_, payload) => payload.data.workingTime
);

$workingTime.on(setWorkingTime, (_, payload) => payload);

export { $workingTime };
