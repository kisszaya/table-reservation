import { createStore } from "effector";

import { $tableHeight } from "../table-fields/table-height";
import { TABLE_CONSTRUCTOR_SETTINGS } from "../../../const";

const $canvasHeight = createStore<number>(
  (1 + 2) * TABLE_CONSTRUCTOR_SETTINGS.HEIGHT_UNIT
);
$canvasHeight.on(
  $tableHeight,
  (_, payload) => (payload + 2) * TABLE_CONSTRUCTOR_SETTINGS.HEIGHT_UNIT
);

export { $canvasHeight };
