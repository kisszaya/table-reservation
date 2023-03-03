import { FC } from "react";
import { Button as MantineButton, ButtonProps } from "@mantine/core";

type Args = ButtonProps;

export const Button: FC<Args> = (props) => {
  return <MantineButton {...props} />;
};
