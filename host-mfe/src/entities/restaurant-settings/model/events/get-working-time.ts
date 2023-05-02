import { createEvent, forward } from "effector";
import { getWorkingTimeFx } from "../effects";

const getWorkingTime = createEvent();

forward({ from: getWorkingTime, to: getWorkingTimeFx });

export { getWorkingTime };
