import { modals } from "@mantine/modals";
import { CreateRestaurantModal } from "../ui";

export const useOpenCreateRestaurantModal = () => {
  const openModal = () =>
    modals.open({
      title: "Please confirm your action",
      children: <CreateRestaurantModal />,
    });

  return { openModal };
};
