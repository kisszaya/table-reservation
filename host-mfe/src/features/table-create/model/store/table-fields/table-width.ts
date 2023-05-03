import { createStore } from "effector";

import { changeTableWidth } from "../../events/table-fields/table-width";
import { resetTable } from "../../events/reset";

const $tableWidth = createStore<number>(1);

$tableWidth.on(changeTableWidth, (_, payload) => payload);
$tableWidth.reset(resetTable);

export { $tableWidth };
