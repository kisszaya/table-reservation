import { Group, Stack } from "@mantine/core";

import { Title } from "shared/ui";

import { useStyles } from "./styles";

import { CreateRestaurantButton } from "features/restaurant-create";
import { LogoutButton } from "features/logout";
import { MeRestaurantsList, ProfileCard } from "entities/me";

export const Profile = () => {
  const { classes } = useStyles();

  return (
    <Group align="start" noWrap spacing="xl" className={classes.container}>
      <Stack>
        <ProfileCard />
        <LogoutButton />
      </Stack>
      <Stack className={classes.content}>
        <Group position="apart">
          <Title>Restaurants</Title>
          <CreateRestaurantButton />
        </Group>
        <MeRestaurantsList />
      </Stack>
    </Group>
  );
};
