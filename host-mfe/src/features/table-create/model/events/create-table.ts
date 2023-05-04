import { createEvent, forward } from "effector";

import { tableEvents } from "entities/table";
import { createTableFx } from "../effects";
import { resetTable } from "./reset";

const createTable = createEvent();

forward({ from: createTable, to: createTableFx });
forward({ from: createTableFx.doneData, to: tableEvents.addTable });
forward({ from: createTableFx.doneData, to: resetTable });

export { createTable };
