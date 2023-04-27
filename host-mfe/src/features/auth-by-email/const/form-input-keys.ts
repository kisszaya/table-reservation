import { TextInputProps } from "@mantine/core";
import { IFormValues } from "../types";

export const formInputKeys: Record<keyof IFormValues, TextInputProps> = {
  email: {
    label: "Email",
    placeholder: "Your email",
    required: true,
  },
  password: {
    label: "Password",
    placeholder: "Your password",
    required: true,
  },
};
