import { Drawer } from "@mantine/core";
import { FC } from "react";

interface Args {
  opened: boolean;
  close: () => void;
}

export const RestaurantSettings: FC<Args> = ({ opened, close }) => {
  return (
    <Drawer
      opened={opened}
      onClose={close}
      title="Settings"
      position="right"
      size="xl"
    >
      RestaurantSettings
    </Drawer>
  );
};
