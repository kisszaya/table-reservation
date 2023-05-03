import { createStore } from "effector";

import { $tableWidth } from "../table-fields/table-width";
import { TABLE_CONSTRUCTOR_SETTINGS } from "../../../const";

const $canvasWidth = createStore<number>(
  (1 + 2) * TABLE_CONSTRUCTOR_SETTINGS.WIDTH_UNIT
);
$canvasWidth.on(
  $tableWidth,
  (_, payload) => (payload + 2) * TABLE_CONSTRUCTOR_SETTINGS.WIDTH_UNIT
);

export { $canvasWidth };
