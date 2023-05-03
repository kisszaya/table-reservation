import { modals } from "@mantine/modals";

import { TableCreate } from "../ui";

export const openCreateTableModal = () => {
  modals.open({
    title: "Добавить стол",
    size: "lg",
    zIndex: 20000,
    children: <TableCreate />,
  });
};
