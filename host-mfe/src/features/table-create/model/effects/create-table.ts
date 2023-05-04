import { attach, combine, createEffect } from "effector";
import { closeModal } from "@mantine/modals";

import { restaurantStore } from "entities/restaurant";

import { tableFields } from "../store";
import { createTable, CreateTableProps } from "../api";
import { TABLE_MODAL_ID } from "../../const";

const _createTableFx = createEffect(async (data: CreateTableProps) => {
  const res = (await createTable(data)).data.table;
  if (res) {
    closeModal(TABLE_MODAL_ID);
  }
  return res;
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
