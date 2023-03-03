import { Requests } from "kisszaya-table-reservation/lib/requests";
import { TextInputProps } from "@mantine/core";

export const initialValues: Requests.UserLogin = {
  email: "",
  password: "",
};

export const inputKeys: Record<keyof Requests.UserLogin, TextInputProps> = {
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
