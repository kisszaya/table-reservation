import { createEvent, forward } from "effector";
import { changeWorkingTimeFx } from "../effects";

const changeWorkingTime = createEvent();

forward({ from: changeWorkingTime, to: changeWorkingTimeFx });

export { changeWorkingTime };
