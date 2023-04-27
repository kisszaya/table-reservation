import { createEvent, forward } from "effector";

import { IFormValues } from "../../types";
import { addEmployeeFx } from "../effects";

const addEmployee = createEvent<IFormValues>();
const resetAddEmployeeStatus = createEvent();

forward({ from: addEmployee, to: addEmployeeFx });

export { addEmployee, resetAddEmployeeStatus };
