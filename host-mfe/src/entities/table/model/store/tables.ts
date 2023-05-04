import { createStore } from "effector";
import { ITablePreview } from "kisszaya-table-reservation/lib/interfaces";

import { getTablesFx } from "../effects";
import { addTable } from "../events";

const $tables = createStore<ITablePreview[] | null>(null);

$tables.on(getTablesFx.doneData, (_, payload) => payload.data.tables);
$tables.on(addTable, (state, payload) => [...(state || []), payload]);

export { $tables };
