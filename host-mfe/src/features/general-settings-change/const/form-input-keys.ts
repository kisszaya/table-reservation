import { TextInputProps } from "@mantine/core";
import { IFormValues } from "../types";

export const formInputKeys: Record<
  keyof Omit<IFormValues, "photos">,
  TextInputProps
> = {
  name: {
    label: "Название заведения",
    placeholder: "Введите название ресторана",
    required: true,
  },
  address: {
    label: "Адрес",
    placeholder: "Введите адрес",
    required: true,
  },
  city: {
    label: "Город",
    placeholder: "Введите город",
    required: true,
  },
};
