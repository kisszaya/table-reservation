import { modals } from "@mantine/modals";
import { CreateRestaurantForm } from "../ui";

export const useOpenCreateRestaurantModal = () => {
  const openModal = () =>
    modals.open({
      title: "Please confirm your action",
      children: <CreateRestaurantForm />,
    });

  return { openModal };
};
