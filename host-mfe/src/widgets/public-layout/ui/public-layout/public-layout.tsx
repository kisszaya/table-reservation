import { FC, ReactNode } from "react";

import { useStyles } from "./styles";

interface Args {
  children: ReactNode;
}

export const PublicLayout: FC<Args> = ({ children }) => {
  const { classes } = useStyles();

  return <div className={classes.container}>{children}</div>;
};
