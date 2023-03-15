import { FC } from "react";

import { IArgsWithChildren } from "shared/types";

import { MantineProvider } from "./mantine-provider";
import { ModalsProvider } from "./modals-provider";

export const Providers: FC<IArgsWithChildren> = ({ children }) => {
  return (
    <MantineProvider>
      <ModalsProvider>{children}</ModalsProvider>
    </MantineProvider>
  );
};
