import { attach, createEffect } from "effector";

import { restaurantStore } from "entities/restaurant";

import { getTables } from "../api";

interface Props {
  restaurant_id: string;
}

const _getTablesFx = createEffect(async (props: Props) => {
  const { restaurant_id } = props;

  return await getTables({
    restaurant_id,
  });
});

const getTablesFx = attach({
  effect: _getTablesFx,
  source: restaurantStore.$restaurantInfo,
  mapParams: (_, source): Props => {
    const restaurant_id = source ? source.restaurant_id.toString() : "";

    return { restaurant_id };
  },
});

export { getTablesFx };
