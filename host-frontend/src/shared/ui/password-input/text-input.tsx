import { FC } from "react";
import { PasswordInput as MantinePasswordInput, PasswordInputProps } from "@mantine/core";

type Args = PasswordInputProps;
export const PasswordInput: FC<Args> = (props) => {
  return <MantinePasswordInput {...props} />;
};
