import { createStore } from "effector";

import { changeTableHeight } from "../../events/table-fields/table-height";
import { resetTable } from "../../events/reset";

const $tableHeight = createStore<number>(1);

$tableHeight.on(changeTableHeight, (_, payload) => payload);
$tableHeight.reset(resetTable);

export { $tableHeight };
