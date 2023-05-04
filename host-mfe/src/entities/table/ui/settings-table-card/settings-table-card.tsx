import { ITablePreview } from "kisszaya-table-reservation/lib/interfaces";
import { Card, Divider, Group, Stack } from "@mantine/core";
import { IconUsers } from "@tabler/icons-react";

import { TableSchema } from "..";
import { Title, Text } from "shared/ui";
import { TABLE_SETTINGS_SCHEMA } from "../../const";

import { useStyles } from "./styles";

type Props = ITablePreview;

export const SettingsTableCard = (props: Props) => {
  const { classes } = useStyles();
  const {
    title,
    description,
    persons_count,
    table_id,
    restaurant_id,
    ...schemaProps
  } = props;

  const unit =
    schemaProps.width > 3
      ? TABLE_SETTINGS_SCHEMA.UNIT_SM
      : TABLE_SETTINGS_SCHEMA.UNIT_MD;

  return (
    <Card withBorder>
      <Group noWrap>
        <Stack spacing={4} className={classes.left}>
          <Title order={5}>{title}</Title>
          <Text size="sm" color="gray" weight={500}>
            {description}
          </Text>
          <Group align="center" spacing="xs" mt={16}>
            <IconUsers size={16} strokeWidth={3} />
            <Text weight={900}>{persons_count}</Text>
          </Group>
        </Stack>
        <Divider orientation="vertical" />
        <Stack align="center" justify="center" className={classes.right}>
          <TableSchema table={schemaProps} heightUnit={unit} widthUnit={unit} />
        </Stack>
      </Group>
    </Card>
  );
};
