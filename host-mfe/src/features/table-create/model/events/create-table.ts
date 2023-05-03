import { createEvent, forward } from "effector";
import { createTableFx } from "../effects";

const createTable = createEvent();

forward({ from: createTable, to: createTableFx });

export { createTable };
