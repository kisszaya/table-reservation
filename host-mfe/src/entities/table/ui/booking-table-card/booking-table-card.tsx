import { Badge, Card, Group, Stack } from "@mantine/core";
import { ITablePreview } from "kisszaya-table-reservation/lib/interfaces";
import { IconUsers } from "@tabler/icons-react";

import { Text } from "shared/ui";
import { useStyles } from "./styles";
import { TableSchema } from "..";
import { TABLE_BOOKING_SCHEMA } from "../../const";

interface Props {
  table: ITablePreview;
  index: number;
}

export const BookingTableCard = ({ table, index }: Props) => {
  const { classes } = useStyles();
  const { title, persons_count } = table;

  return (
    <Card className={classes.card}>
      <Stack justify="space-between" className={classes.container}>
        <Stack align="center" justify="center" style={{ height: "100%" }}>
          <TableSchema
            heightUnit={TABLE_BOOKING_SCHEMA.UNIT_SM}
            widthUnit={TABLE_BOOKING_SCHEMA.UNIT_SM}
            table={table}
          />
        </Stack>
        <Group position="apart" align="end">
          <Stack spacing={2}>
            <Text size="sm" color="gray">
              {title}
            </Text>
            <Text size="xl" fw={900}>
              № {index + 1}
            </Text>
          </Stack>
          <Group align="center" spacing="xs">
            <IconUsers size={18} strokeWidth={2} />
            <Text>{persons_count}</Text>
          </Group>
        </Group>
      </Stack>
      <Badge color="green" variant="filled" className={classes.badge}>
        Available
      </Badge>
    </Card>
  );
};
