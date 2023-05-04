import { attach, createEffect } from "effector";

import { restaurantStore } from "entities/restaurant";

import { removeTable } from "../api";

interface Props {
  restaurant_id: string | number;
  table_id: number | string;
}

const _removeTableFx = createEffect(async (props: Props) => {
  return (await removeTable(props)).data.table;
});

const removeTableFx = attach({
  effect: _removeTableFx,
  source: restaurantStore.$restaurantInfo,
  mapParams: (params: number, source): Props => {
    const restaurant_id = source ? source.restaurant_id : "";

    return { restaurant_id, table_id: params };
  },
});

export { removeTableFx };
