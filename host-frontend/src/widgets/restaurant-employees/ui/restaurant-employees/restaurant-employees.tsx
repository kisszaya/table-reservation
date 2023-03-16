import { Drawer } from "@mantine/core";
import { FC } from "react";

interface Args {
  opened: boolean;
  close: () => void;
}

export const RestaurantEmployees: FC<Args> = ({ opened, close }) => {
  return (
    <Drawer
      opened={opened}
      onClose={close}
      title="Employees"
      position="right"
      size="lg"
    >
      RestaurantEmployees
    </Drawer>
  );
};
