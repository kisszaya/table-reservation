import { TextInputProps } from "@mantine/core";
import { Requests } from "kisszaya-table-reservation/lib/requests";
import { USER_ROLE } from "kisszaya-table-reservation/lib/interfaces";

export const initialValues: Requests.UserRegister = {
  email: "",
  lastName: "",
  firstName: "",
  password: "",
  role: USER_ROLE.HOSTESS,
};

export const inputKeys: Record<
  keyof Omit<Requests.UserRegister, "role">,
  TextInputProps
> = {
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
