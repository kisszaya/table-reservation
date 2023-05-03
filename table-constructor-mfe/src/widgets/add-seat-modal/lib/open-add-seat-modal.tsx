import { modals } from "@mantine/modals";

import { AddSeatModal } from "../ui";
import { IAddSeatModalProps } from "../types";
import { OPEN_ADD_SEAT_MODAL_ID } from "../const";

export const openAddSeatModal = (props: IAddSeatModalProps) =>
  modals.open({
    title: "Add seat-fields-fields",
    size: "lg",
    id: OPEN_ADD_SEAT_MODAL_ID,
    children: <AddSeatModal {...props} />,
  });
