import { modals } from "@mantine/modals";

import { SeatCreate, ISeatCreateProps } from "../ui";
import { SEAT_MODAL_ID } from "../const";

export const openCreateSeatModal = (props: ISeatCreateProps) => {
  modals.open({
    modalId: SEAT_MODAL_ID,
    size: "lg",
    zIndex: 20001,
    children: <SeatCreate {...props} />,
  });
};
