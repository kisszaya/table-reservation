import { modals } from "@mantine/modals";
import { CreateShapeModal } from "../ui";

export const openCreateShapeModal = () =>
  modals.open({
    title: "Add table",
    size: "lg",
    children: <CreateShapeModal />,
  });
