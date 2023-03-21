import { useCallback } from "react";
import { Requests } from "kisszaya-table-reservation/lib/requests";
import { closeAllModals } from "@mantine/modals";
import { TextInputProps } from "@mantine/core";

import { restaurantsApi, restaurantsStore } from "entities/restaurants";

export type FormValues = Requests.CreateRestaurant;

export const initialValues: FormValues = {
  name: "",
  city: "",
  phone: "",
  address: "",
};

export const useCreateRestaurant = () => {
  const createRestaurant = useCallback(
    async (formValues: Requests.CreateRestaurant) => {
      const { data } = await restaurantsApi.createRestaurant(formValues);
      if (data) {
        restaurantsStore.addRestaurantPreviews([data]);
        closeAllModals();
      }
    },
    []
  );

  const inputKeys: Record<keyof FormValues, TextInputProps> = {
    name: {
      label: "Restaurant name",
      placeholder: "Restaurant name",
      required: true,
    },
    phone: {
      label: "Phone",
      placeholder: "Restaurant phone",
      required: true,
    },
    city: {
      label: "Restaurant city",
      placeholder: "Restaurant city",
      required: true,
    },
    address: {
      label: "Restaurant address",
      placeholder: "Restaurant address",
      required: true,
    },
  };

  return { createRestaurant, inputKeys };
};
