import { TextInputProps } from "@mantine/core";
import { IAddEmployeeProps, IFormValues } from "../types";

type Props = IAddEmployeeProps & { disabled: boolean };

export const useFormInputKeys = ({
  userInfo,
  disabled,
}: Props): Record<keyof Omit<IFormValues, "roles">, TextInputProps> => ({
  password: {
    placeholder: "password",
    required: true,
    disabled: "password" in userInfo || disabled,
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
    disabled: "phone" in userInfo || disabled,
  },
  lastName: {
    placeholder: "last name",
    required: true,
    disabled: "fullName" in userInfo || disabled,
  },
  firstName: {
    placeholder: "first name",
    required: true,
    disabled: "fullName" in userInfo || disabled,
  },
});
