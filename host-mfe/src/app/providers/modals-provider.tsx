import { FC } from "react";
import { ModalsProvider as MantineModalsProvider } from "@mantine/modals";

import { IArgsWithChildren } from "shared/types";

export const ModalsProvider: FC<IArgsWithChildren> = ({ children }) => {
  return <MantineModalsProvider>{children}</MantineModalsProvider>;
};
