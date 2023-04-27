import { createStore } from "effector";
import { IRestaurantEmployee } from "kisszaya-table-reservation/lib/interfaces";

import { getEmployeesFx, removeEmployeeFx } from "../effects";

const $employees = createStore<IRestaurantEmployee[]>([]);

$employees.on(
  getEmployeesFx.doneData,
  (state, payload) => payload.data.employees
);

$employees.on(removeEmployeeFx.doneData, (state, payload) => {
  return state.filter(
    (employee) => employee.employee_id !== payload.data.employee_id
  );
});

export { $employees };
