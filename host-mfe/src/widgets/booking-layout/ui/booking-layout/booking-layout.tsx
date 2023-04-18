import { FC } from "react";
import { IArgsWithChildren } from "shared/types";

import { useStyles } from "./styles";

export const BookingLayout: FC<IArgsWithChildren> = ({ children }) => {
  const { classes } = useStyles();

  return <div className={classes.container}>{children}</div>;
};
