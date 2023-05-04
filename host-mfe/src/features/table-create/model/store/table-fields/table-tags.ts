import { createStore } from "effector";

import { changeTableTags } from "../../events/table-fields/table-tags";
import { resetTable } from "../../events/reset";

const $tableTags = createStore<string[]>([]);
$tableTags.on(changeTableTags, (_, payload) => payload);
$tableTags.reset(resetTable);

export { $tableTags };
