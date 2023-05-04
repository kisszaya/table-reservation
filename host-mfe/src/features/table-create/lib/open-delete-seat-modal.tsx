import { modals } from "@mantine/modals";

import { ISeatDeleteProps, SeatDelete } from "../ui";
import { SEAT_DELETE_MODAL_ID } from "../const";

export const openDeleteSeatModal = (props: ISeatDeleteProps) => {
  modals.open({
    modalId: SEAT_DELETE_MODAL_ID,
    size: "lg",
    zIndex: 20001,
    children: <SeatDelete {...props} />,
  });
};
