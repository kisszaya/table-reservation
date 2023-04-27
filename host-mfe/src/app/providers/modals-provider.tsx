import { FC, PropsWithChildren } from "react";
import { ModalsProvider as MantineModalsProvider } from "@mantine/modals";

export const ModalsProvider: FC<PropsWithChildren> = ({ children }) => {
  return <MantineModalsProvider>{children}</MantineModalsProvider>;
};
