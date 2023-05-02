import { FC } from "react";
import { Title as MantineTitle, TitleProps } from "@mantine/core";

import { TITLE_VARIANT } from "../const";

type Props = Omit<TitleProps, "variant"> & {
  variant?: TITLE_VARIANT;
};
export const Title: FC<Props> = (props) => {
  const { variant, ...otherProps } = props;

  if (variant === TITLE_VARIANT.DRAWER_TITLE) {
    return <MantineTitle {...otherProps} order={4} />;
  }

  return <MantineTitle {...otherProps} />;
};
