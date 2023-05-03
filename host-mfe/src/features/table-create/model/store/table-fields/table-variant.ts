import { createStore } from "effector";
import { TABLE_VARIANT } from "kisszaya-table-reservation/lib/interfaces";

import { changeTableVariant } from "../../events/table-fields/table-variant";
import { resetTable } from "../../events/reset";

const $tableVariant = createStore<TABLE_VARIANT>(TABLE_VARIANT.SQUARE);

$tableVariant.on(changeTableVariant, (_, payload) => payload);
$tableVariant.reset(resetTable);

export { $tableVariant };
