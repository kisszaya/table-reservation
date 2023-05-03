import { modals } from "@mantine/modals";

import { SeatCreate, ISeatCreateProps } from "../ui";

export const openCreateSeatModal = (props: ISeatCreateProps) => {
  modals.open({
    title: "Добавить стул",
    size: "lg",
    zIndex: 20001,
    children: <SeatCreate {...props} />,
  });
};
