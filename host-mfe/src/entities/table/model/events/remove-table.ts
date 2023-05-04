import { createEvent, forward } from "effector";
import { removeTableFx } from "../effects";

const removeTable = createEvent<number>();

forward({ from: removeTable, to: removeTableFx });

export { removeTable };
