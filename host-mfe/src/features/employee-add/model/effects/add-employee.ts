import { attach, createEffect } from "effector";

import { restaurantStore } from "entities/restaurant";

import { addEmployee } from "../api";
import { IFormValues } from "../../types";

interface IAddEmployeeFxProps {
  employee: IFormValues;
  restaurant_id: string;
}

const _addEmployeeFx = createEffect(async (props: IAddEmployeeFxProps) => {
  const { employee, restaurant_id } = props;
  console.log("TEST props", props);

  return await addEmployee({
    employee: { ...employee, roles: [employee.roles] },
    restaurant_id,
  });
});

const addEmployeeFx = attach({
  effect: _addEmployeeFx,
  source: restaurantStore.$restaurantInfo,
  mapParams: (params: IFormValues, source): IAddEmployeeFxProps => {
    const restaurant_id = source ? source.restaurant_id.toString() : "";

    return { employee: params, restaurant_id };
  },
});

export { addEmployeeFx };
