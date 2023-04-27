import { FC, PropsWithChildren } from "react";

import { MantineProvider } from "./mantine-provider";
import { ModalsProvider } from "./modals-provider";

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <MantineProvider>
      <ModalsProvider>{children}</ModalsProvider>
    </MantineProvider>
  );
};
