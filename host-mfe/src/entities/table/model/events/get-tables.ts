import { createEvent, forward } from "effector";
import { getTablesFx } from "../effects";

const getTables = createEvent();

forward({ from: getTables, to: getTablesFx });

export { getTables };
