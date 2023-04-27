import { FC, PropsWithChildren } from "react";

import { MantineProvider } from "./mantine-provider";
import { ModalsProvider } from "./modals-provider";
import { NotificationsProvider } from "./notifications-provider";

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <MantineProvider>
      <ModalsProvider>
        <NotificationsProvider>{children}</NotificationsProvider>
      </ModalsProvider>
    </MantineProvider>
  );
};
