import { FC } from "react";
import { Title as MantineTitle, TitleProps } from "@mantine/core";

type Args = TitleProps;
export const Title: FC<Args> = (props) => {
  return <MantineTitle {...props} />;
};
