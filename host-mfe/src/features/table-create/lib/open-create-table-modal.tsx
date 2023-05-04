import { modals } from "@mantine/modals";

import { TableCreate } from "../ui";
import { TABLE_MODAL_ID } from "../const";

export const openCreateTableModal = () => {
  modals.open({
    title: "Добавить стол",
    modalId: TABLE_MODAL_ID,
    size: "lg",
    zIndex: 20000,
    children: <TableCreate />,
  });
};
