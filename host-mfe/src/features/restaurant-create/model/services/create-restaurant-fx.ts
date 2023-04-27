import { closeAllModals } from "@mantine/modals";

import { meEvents } from "entities/me";
import { IFormValues } from "../../types";
import { createRestaurant } from "../api";

export const createRestaurantFx = async (formValues: IFormValues) => {
  const { data } = await createRestaurant(formValues);
  if (data) {
    meEvents.addRestaurant(data);
    closeAllModals();
  }
};
