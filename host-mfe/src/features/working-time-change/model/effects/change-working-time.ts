import { attach, combine, createEffect, sample } from "effector";

import { restaurantStore } from "entities/restaurant";
import { IWorkingTime } from "entities/restaurant-settings";
import { setWorkingTime } from "entities/restaurant-settings/model/events/set-working-time";

import { $combinedWorkingTime } from "../store";
import { changeWorkingTime } from "../api";

interface Props {
  restaurant_id: string | number;
  combinedWorkingTime: IWorkingTime;
}

const _changeWorkingTimeFx = createEffect(async (props: Props) => {
  const { restaurant_id, combinedWorkingTime } = props;

  return await changeWorkingTime({
    restaurant_id,
    data: { workingTime: combinedWorkingTime },
  });
});

const $store = combine(
  restaurantStore.$restaurantInfo,
  $combinedWorkingTime,
  (restaurantInfo, combinedWorkingTime) => ({
    restaurantInfo,
    combinedWorkingTime,
  })
);

const changeWorkingTimeFx = attach({
  effect: _changeWorkingTimeFx,
  source: $store,
  mapParams: (_, source) => {
    const restaurant_id = source.restaurantInfo
      ? source.restaurantInfo.restaurant_id.toString()
      : "";

    return {
      restaurant_id,
      combinedWorkingTime: source.combinedWorkingTime as IWorkingTime,
    };
  },
});

sample({
  clock: changeWorkingTimeFx.doneData,
  fn: (data) => data.data.workingTime,
  target: setWorkingTime,
});

export { changeWorkingTimeFx };
