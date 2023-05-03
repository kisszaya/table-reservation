import { createStore } from "effector";

import { changeTableTitle } from "../../events/table-fields/table-title";
import { resetTable } from "../../events/reset";

const $tableTitle = createStore<string>("");

$tableTitle.on(changeTableTitle, (_, payload) => payload);
$tableTitle.reset(resetTable);

export { $tableTitle };
