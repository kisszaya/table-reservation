import { IconPlus } from "@tabler/icons-react";
import { Button } from "@mantine/core";

import { useOpenCreateRestaurantModal } from "../../lib";

export const CreateRestaurantButton = () => {
  const { openModal } = useOpenCreateRestaurantModal();

  return (
    <Button
      onClick={openModal}
      rightIcon={<IconPlus size={20} strokeWidth={2} color="white" />}
    >
      Create restaurant
    </Button>
  );
};
