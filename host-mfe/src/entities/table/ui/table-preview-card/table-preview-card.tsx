import { Badge, Card, Group, Stack } from "@mantine/core";
import { IconUsers } from "@tabler/icons-react";

import { Text } from "shared/ui";
import { ITablePreviewCard } from "../../types";
import { useStyles } from "./styles";

export const TablePreviewCard = (props: ITablePreviewCard) => {
  const { classes } = useStyles();
  const { tableNumber, personsCount, title, hall } = props;

  return (
    <Card className={classes.card}>
      <Stack justify="space-between" className={classes.container}>
        <div style={{ height: "100%" }} />
        <Group position="apart" align="end">
          <Stack spacing={2}>
            <Text size="sm" color="gray">
              {hall}
            </Text>
            <Text size="xl" fw={900}>
              № {tableNumber}
            </Text>
          </Stack>
          <Group align="center" spacing="xs">
            <IconUsers size={20} />
            <Text>{personsCount}</Text>
          </Group>
        </Group>
      </Stack>
      <Badge color="green" variant="filled" className={classes.badge}>
        Available
      </Badge>
    </Card>
  );
};
