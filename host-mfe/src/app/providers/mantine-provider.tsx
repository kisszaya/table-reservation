import { FC } from "react";
import { MantineProvider as Mantine } from "@mantine/core";

import { IArgsWithChildren } from "shared/types";

export const MantineProvider: FC<IArgsWithChildren> = ({ children }) => {
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
