import { attach, combine, createEffect } from "effector";

import { restaurantStore } from "entities/restaurant";
import { tableFields } from "../store";
import { createTable, CreateTableProps } from "../api";

const _createTableFx = createEffect(async (data: CreateTableProps) => {
  return await createTable(data);
});

const _createTableStore = combine(
  restaurantStore.$restaurantInfo,
  tableFields.$tableFields,
  (restaurantInfo, tableFields) => {
    return {
      restaurant_id: restaurantInfo?.restaurant_id || "",
      data: tableFields,
    };
  }
);

const createTableFx = attach({
  effect: _createTableFx,
  source: _createTableStore,
  mapParams: (_, source) => {
    return source;
  },
});

export { createTableFx };
