import { attach, createEffect } from "effector";

import { restaurantStore } from "entities/restaurant";
import { getWorkingTime } from "../api";

interface Props {
  restaurant_id: string;
}

const _getWorkingTimeFx = createEffect(async (props: Props) => {
  const { restaurant_id } = props;

  return await getWorkingTime({
    restaurant_id,
  });
});

const getWorkingTimeFx = attach({
  effect: _getWorkingTimeFx,
  source: restaurantStore.$restaurantInfo,
  mapParams: (_, source): Props => {
    const restaurant_id = source ? source.restaurant_id.toString() : "";

    return { restaurant_id };
  },
});

export { getWorkingTimeFx };
