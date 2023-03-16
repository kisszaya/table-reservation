import { Drawer } from "@mantine/core";
import { FC } from "react";

interface Args {
  opened: boolean;
  close: () => void;
}

export const RestaurantDiscounts: FC<Args> = ({ opened, close }) => {
  return (
    <Drawer
      opened={opened}
      onClose={close}
      title="Discounts"
      position="right"
      size="lg"
    >
      RestaurantDiscounts
    </Drawer>
  );
};
