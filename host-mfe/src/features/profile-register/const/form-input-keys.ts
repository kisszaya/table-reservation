import { TextInputProps } from "@mantine/core";

import { IFormValues } from "../types";

export const formInputKeys: Record<keyof IFormValues, TextInputProps> = {
  email: {
    label: "Email",
    placeholder: "Your email",
    required: true,
  },
  firstName: {
    label: "First name",
    placeholder: "Your firstname",
    required: true,
  },
  lastName: {
    label: "Last name",
    placeholder: "Your lastname",
    required: true,
  },
  password: {
    label: "Password",
    placeholder: "Your password",
    required: true,
  },
  phone: {
    label: "Phone",
    placeholder: "Your phone",
  },
};
