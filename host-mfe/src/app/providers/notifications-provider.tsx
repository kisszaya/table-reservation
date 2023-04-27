import { FC, PropsWithChildren } from "react";
import { NotificationsProvider as NotificationsProviderMantine } from "@mantine/notifications";

export const NotificationsProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <NotificationsProviderMantine>{children}</NotificationsProviderMantine>
  );
};
