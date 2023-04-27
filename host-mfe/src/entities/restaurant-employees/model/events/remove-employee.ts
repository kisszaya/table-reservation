import { createEvent, forward } from "effector";
import { removeEmployeeFx } from "../effects";

const removeEmployee = createEvent<string>();

forward({ from: removeEmployee, to: removeEmployeeFx });

export { removeEmployee };
