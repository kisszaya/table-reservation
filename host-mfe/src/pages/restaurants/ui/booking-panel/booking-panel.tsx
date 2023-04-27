import { FC } from "react";
import { Group } from "@mantine/core";
import { BookingLeftPanel, BookingRightPanel } from "entities/booking-panel";

export const BookingPanel: FC = () => {
  return (
    <Group noWrap>
      <BookingLeftPanel />
      <BookingRightPanel />
    </Group>
  );
};
