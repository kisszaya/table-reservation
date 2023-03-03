import { FC, ReactNode } from "react";
import { Container } from "@mantine/core";

import { useStyles } from "./styles";

interface Args {
  children: ReactNode;
}

export const PublicLayout: FC<Args> = ({ children }) => {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <Container size="md">{children}</Container>
    </div>
  );
};
