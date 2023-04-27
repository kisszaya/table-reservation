import { attach, createEffect } from "effector";

import { restaurantStore } from "entities/restaurant";

import { getRestaurantEmployees } from "../api";

interface Props {
  restaurant_id: string;
}

const _getEmployeesFx = createEffect(async (props: Props) => {
  const { restaurant_id } = props;

  return await getRestaurantEmployees({
    restaurant_id,
  });
});

const getEmployeesFx = attach({
  effect: _getEmployeesFx,
  source: restaurantStore.$restaurantInfo,
  mapParams: (_, source): Props => {
    const restaurant_id = source ? source.restaurant_id.toString() : "";

    return { restaurant_id };
  },
});

export { getEmployeesFx };
