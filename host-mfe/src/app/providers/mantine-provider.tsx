import { FC, PropsWithChildren } from "react";
import { MantineProvider as Mantine } from "@mantine/core";

export const MantineProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Mantine
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: "light",
      }}
    >
      {children}
    </Mantine>
  );
};
