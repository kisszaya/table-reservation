import { createEvent, forward } from "effector";
import { getEmployeesFx } from "../effects";

const getEmployees = createEvent();

forward({ from: getEmployees, to: getEmployeesFx });

export { getEmployees };
