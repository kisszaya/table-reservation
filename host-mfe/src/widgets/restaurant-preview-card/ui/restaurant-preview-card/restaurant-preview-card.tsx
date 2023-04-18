import { FC } from "react";
import Link from "next/link";
import { IRestaurantUserPreview } from "kisszaya-table-reservation/lib/interfaces";
import { IconAddressBook, IconHome } from "@tabler/icons-react";

import { PRIVATE_PATH } from "shared/config";
import { Text } from "shared/ui";
import { Badge, Card, Group, Stack } from "@mantine/core";

import { useStyles } from "./styles";

type Args = IRestaurantUserPreview;

export const RestaurantPreviewCard: FC<Args> = (props) => {
  const { restaurant_id, name, roles, city, photos, address } = props;
  const { classes } = useStyles();

  return (
    <Link
      href={PRIVATE_PATH.RESTAURANT(restaurant_id)}
      className={classes.container}
    >
      <Card className={classes.card}>
        <Group position="right">
          <Badge>{Array.isArray(roles) ? roles.join(", ") : roles}</Badge>
        </Group>
        <Text fz="lg" fw={600} mb="md" mt={"xs"}>
          {name}
        </Text>
        <Stack spacing={2}>
          <Group noWrap spacing={10}>
            <IconAddressBook stroke={1.5} size={20} className={classes.icon} />
            <Text fz="sm" c="dimmed">
              {address}
            </Text>
          </Group>
          <Group noWrap spacing={10} align="center">
            <IconHome stroke={1.5} size={20} className={classes.icon} />
            <Text fz="sm" c="dimmed">
              {city}
            </Text>
          </Group>
        </Stack>
      </Card>
    </Link>
  );
};
