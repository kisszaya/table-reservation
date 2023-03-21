import { FC } from "react";
import { Group } from "@mantine/core";
import { BookingsList, BookingDates, BookingTables } from "..";

export const BookingPanel: FC = () => {
  return (
    <Group noWrap>
      <BookingsList />
      <BookingDates />
      <BookingTables />
    </Group>
  );
};
