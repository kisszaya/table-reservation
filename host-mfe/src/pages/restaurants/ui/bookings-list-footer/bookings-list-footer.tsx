import React, { FC, useMemo } from "react";
import { ActionIcon, Stack, useMantineTheme } from "@mantine/core";
import { IconArrowRight, IconSearch } from "@tabler/icons-react";

import {
  BookingsRealtimeStatisticsCard,
  IStatisticsCardElement,
} from "widgets";
import { TextInput } from "shared/ui";

export const BookingsListFooter: FC = () => {
  const theme = useMantineTheme();

  const statistics: IStatisticsCardElement[] = useMemo(
    () => [
      { title: "Expect", count: 2 },
      { title: "Open", count: 2 },
      { title: "Closing", count: 2 },
      { title: "New", count: 2 },
    ],
    []
  );

  return (
    <Stack>
      <BookingsRealtimeStatisticsCard statisticElements={statistics} />
      <TextInput
        icon={<IconSearch size="1.1rem" stroke={1.5} />}
        placeholder="Guest phone number or name"
        radius={theme.radius.xl}
        rightSection={
          <ActionIcon
            size={30}
            radius="xl"
            color={theme.primaryColor}
            variant="filled"
          >
            <IconArrowRight size="1.1rem" stroke={1.5} />
          </ActionIcon>
        }
      />
    </Stack>
  );
};
