import { FC, PropsWithChildren } from "react";

import { useStyles } from "./styles";

export const BookingLayout: FC<PropsWithChildren> = ({ children }) => {
  const { classes } = useStyles();

  return <div className={classes.container}>{children}</div>;
};
