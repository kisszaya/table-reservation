import { createEvent } from "effector";
import { IWorkingTime } from "../types";

export const setWorkingTime = createEvent<IWorkingTime>();
