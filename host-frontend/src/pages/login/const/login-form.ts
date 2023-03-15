import { Requests } from "kisszaya-table-reservation/lib/requests";
import { TextInputProps } from "@mantine/core";

export type FormValues = Omit<Requests.UserLogin, "fingerprint">;

export const initialValues: FormValues = {
  email: "",
  password: "",
};

export const inputKeys: Record<keyof FormValues, TextInputProps> = {
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
