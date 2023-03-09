import { FC, ReactNode } from "react";
import { Container } from "@mantine/core";

import { AuthorizationProvider } from "features/authorization";
import { useStyles } from "./styles";

interface Args {
  children: ReactNode;
}

export const PrivateLayout: FC<Args> = ({ children }) => {
  const { classes } = useStyles();

  return (
    <AuthorizationProvider>
      <div className={classes.container}>
        <Container size="lg">{children}</Container>
      </div>
    </AuthorizationProvider>
  );
};
