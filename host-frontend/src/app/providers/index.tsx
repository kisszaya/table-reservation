import { FC } from "react";

import { IArgsWithChildren } from "shared/types";

import { MantineProvider } from "./mantine-provider";

export const Providers: FC<IArgsWithChildren> = ({ children }) => {
  return <MantineProvider>{children}</MantineProvider>;
};
