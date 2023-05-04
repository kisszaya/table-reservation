import { createStore } from "effector";
import { ITablePreview } from "kisszaya-table-reservation/lib/interfaces";

import { getTablesFx, removeTableFx } from "../effects";
import { addTable } from "../events";

const $tables = createStore<ITablePreview[] | null>(null);

$tables.on(getTablesFx.doneData, (_, payload) => payload.data.tables);
$tables.on(addTable, (state, payload) => [...(state || []), payload]);
$tables.on(removeTableFx.doneData, (state, payload) =>
  state?.filter((table) => table.table_id !== payload.table_id)
);

export { $tables };
