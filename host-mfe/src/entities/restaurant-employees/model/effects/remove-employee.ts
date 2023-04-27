import { attach, createEffect } from "effector";

import { restaurantStore } from "entities/restaurant";

import { removeEmployee } from "../api";

interface Props {
  restaurant_id: string;
  employee_id: string;
}

const _removeEmployeeFx = createEffect(async (props: Props) => {
  const { restaurant_id, employee_id } = props;

  return await removeEmployee({
    restaurant_id,
    employee_id,
  });
});

const removeEmployeeFx = attach({
  effect: _removeEmployeeFx,
  source: restaurantStore.$restaurantInfo,
  mapParams: (employee_id: string, source): Props => {
    const restaurant_id = source ? source.restaurant_id.toString() : "";

    return { restaurant_id, employee_id };
  },
});

export { removeEmployeeFx };
