import { PropsWithChildren, useCallback } from "react";
import { IconAddressBook, IconHome } from "@tabler/icons-react";
import { USER_ROLE } from "kisszaya-table-reservation/lib/interfaces";
import Link from "next/link";
import { Badge, Card, Group, Stack } from "@mantine/core";

import { useStyles } from "./styles";
import { Text } from "shared/ui";

interface Props {
  link?: string;
  roles: USER_ROLE[];
  name: string;
  city: string;
  address: string;
}

export const RestaurantPreview = (props: Props) => {
  const { link, roles, city, name, address } = props;
  const { classes } = useStyles();

  const Container = useCallback(
    ({ children }: PropsWithChildren) => {
      if (link) {
        return (
          <Link href={link} className={classes.container}>
            {children}
          </Link>
        );
      }
      return <>{children}</>;
    },
    [classes.container, link]
  );

  return (
    <Container>
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
    </Container>
  );
};
