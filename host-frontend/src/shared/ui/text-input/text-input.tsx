import { FC } from "react";
import { TextInput as MantineTextInput, TextInputProps } from "@mantine/core";

type Args = TextInputProps;
export const TextInput: FC<Args> = (props) => {
  return <MantineTextInput {...props} />;
};
