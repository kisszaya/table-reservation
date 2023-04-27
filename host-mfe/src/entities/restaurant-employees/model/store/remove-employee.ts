import { createStore } from "effector";
import { removeEmployeeFx } from "../effects";

const $removingEmployeeId = createStore<null | string>(null);

$removingEmployeeId.on(removeEmployeeFx, (state, payload) => {
  return payload;
});

$removingEmployeeId.on(
  [removeEmployeeFx.doneData, removeEmployeeFx.failData],
  () => {
    return null;
  }
);

export { $removingEmployeeId };
