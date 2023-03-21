import { FC } from "react";
import { Navbar } from "@mantine/core";

import { BookingsListHeader, BookingsListFooter, BookingsListBody } from "..";
import { BOOKINGS_LIST } from "shared/const";

import { useStyles } from "./styles";

export const BookingsList: FC = () => {
  const { classes } = useStyles();

  return (
    <Navbar
      className={classes.container}
      height={BOOKINGS_LIST.PANEL_HEIGHT}
      p="xs"
      width={{ base: BOOKINGS_LIST.PANEL_WIDTH }}
    >
      <Navbar.Section mb="xs">
        <BookingsListHeader />
      </Navbar.Section>
      <Navbar.Section grow>
        <BookingsListBody />
      </Navbar.Section>
      <Navbar.Section>
        <BookingsListFooter />
      </Navbar.Section>
    </Navbar>
  );
};
