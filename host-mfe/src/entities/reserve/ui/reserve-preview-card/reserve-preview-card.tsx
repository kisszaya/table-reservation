import { Card, Stack } from "@mantine/core";

import { Title } from "shared/ui";

import { useStyles } from "./styles";
import { IReservePreviewCard } from "../../types";

export const ReservePreviewCard = (props: IReservePreviewCard) => {
  const { phone, fullName } = props;
  const { classes } = useStyles();

  return (
    <Card withBorder className={classes.card} py="xs" px="sm">
      <Stack spacing={4}>
        <Title order={5}>{phone}</Title>
        <Title order={5} fw={400}>
          {fullName}
        </Title>
      </Stack>
    </Card>
  );
};
