import { Group, Stack } from "@mantine/core";
import { SEAT_VARIANT } from "kisszaya-table-reservation/lib/interfaces";

import { SeatVariantCard } from "..";

import { Title } from "shared/ui";
import { ArmchairIcon, ChairIcon } from "shared/assets";

import { useStyles } from "./styles";
import { useAddSeat } from "../../lib";

export interface ISeatCreateProps {
  widthNumber: number;
  heightNumber: number;
}

export const SeatCreate = (props: ISeatCreateProps) => {
  const { classes } = useStyles();
  const { addSeat } = useAddSeat(props);

  return (
    <Stack align="center">
      <Title align="center" order={3}>
        Выберите вариант стула
      </Title>
      <Group className={classes.cards} position="center">
        <SeatVariantCard
          icon={ArmchairIcon}
          title="Софа"
          onClick={() => addSeat(SEAT_VARIANT.ARMCHAIR)}
        />
        <SeatVariantCard
          icon={ChairIcon}
          title="Стул"
          onClick={() => addSeat(SEAT_VARIANT.CHAR)}
        />
      </Group>
    </Stack>
  );
};
