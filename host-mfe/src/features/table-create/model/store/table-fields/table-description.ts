import { createStore } from "effector";

import { resetTable } from "../../events/reset";
import { changeTableDescription } from "../../events/table-fields/table-description";

const $tableDescription = createStore<string>("");

$tableDescription.on(changeTableDescription, (_, payload) => payload);
$tableDescription.reset(resetTable);

export { $tableDescription };
