import { TextInputProps } from "@mantine/core";
import { IFormValues } from "../types";

export const formInputKeys: Record<keyof IFormValues, TextInputProps> = {
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
