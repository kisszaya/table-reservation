import { FC } from "react";
import { Navbar, Stack } from "@mantine/core";

import { BOOKINGS_LIST } from "shared/const";

import { useStyles } from "./styles";
import { BookingLeftPanelHeader } from "..";
import { ReservesPreviewList } from "entities/reserve";
import { ReservesStatisticsCard } from "features/reserves-realtime-statistics";
import { ReservesSearchInput } from "features/reserves-filter";

export const BookingLeftPanel: FC = () => {
  const { classes } = useStyles();

  return (
    <Navbar
      className={classes.container}
      height={BOOKINGS_LIST.PANEL_HEIGHT}
      p="xs"
      width={{ base: BOOKINGS_LIST.PANEL_WIDTH }}
    >
      <Navbar.Section mb="xs">
        <BookingLeftPanelHeader />
      </Navbar.Section>
      <Navbar.Section grow>
        <ReservesPreviewList />
      </Navbar.Section>
      <Navbar.Section>
        <Stack>
          <ReservesStatisticsCard />
          <ReservesSearchInput />
        </Stack>
      </Navbar.Section>
    </Navbar>
  );
};
