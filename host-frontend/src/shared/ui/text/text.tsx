import { FC } from "react";
import { Text as MantineText, TextProps } from "@mantine/core";

type Args = TextProps;
export const Text: FC<Args> = (props) => {
  return <MantineText {...props} />;
};
