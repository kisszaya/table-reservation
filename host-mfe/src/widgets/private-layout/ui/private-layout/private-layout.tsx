import { FC, ReactNode } from "react";
import { Container } from "@mantine/core";

import { useStyles } from "./styles";

interface Args {
  children: ReactNode;
}

export const PrivateLayout: FC<Args> = ({ children }) => {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <Container size="lg">{children}</Container>
    </div>
  );
};
