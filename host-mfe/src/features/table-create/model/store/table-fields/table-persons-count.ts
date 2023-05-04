import { createStore } from "effector";

import { changeTablePersonsCount } from "../../events/table-fields/table-persons-count";
import { resetTable } from "../../events/reset";
import { $tableSeats } from "../table-seats";

const $tablePersonsCount = createStore<number>(0);

$tablePersonsCount.on(changeTablePersonsCount, (_, payload) => payload);
$tablePersonsCount.on($tableSeats, (_, payload) => payload.length);

$tablePersonsCount.reset(resetTable);

export { $tablePersonsCount };
