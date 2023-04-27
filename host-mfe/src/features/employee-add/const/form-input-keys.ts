import { TextInputProps } from "@mantine/core";
import { IAddEmployeeProps, IFormValues } from "../types";

export const useFormInputKeys = ({
  userInfo,
}: IAddEmployeeProps): Record<
  keyof Omit<IFormValues, "roles">,
  TextInputProps
> => ({
  password: {
    placeholder: "password",
    required: true,
    disabled: "password" in userInfo,
  },
  email: {
    placeholder: "email",
    required: true,
    disabled: true,
    value: userInfo.email,
  },
  phone: {
    placeholder: "phone",
    required: true,
    disabled: "phone" in userInfo,
  },
  lastName: {
    placeholder: "last name",
    required: true,
    disabled: "fullName" in userInfo,
  },
  firstName: {
    placeholder: "first name",
    required: true,
    disabled: "fullName" in userInfo,
  },
});
