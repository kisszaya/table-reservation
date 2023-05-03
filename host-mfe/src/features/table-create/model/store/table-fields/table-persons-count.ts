import { createStore } from "effector";

import { changeTablePersonsCount } from "../../events/table-fields/table-persons-count";
import { resetTable } from "../../events/reset";

const $tablePersonsCount = createStore<number>(0);

$tablePersonsCount.on(changeTablePersonsCount, (_, payload) => payload);
$tablePersonsCount.reset(resetTable);

export { $tablePersonsCount };
