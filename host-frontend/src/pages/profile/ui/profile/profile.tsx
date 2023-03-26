import { Button, Group, Stack } from "@mantine/core";
import { useStore } from "effector-react";
import { IconPlus } from "@tabler/icons-react";

import { ProfileCard, RestaurantPreviewCard } from "widgets";
import { Title } from "shared/ui";
import { useLogout } from "pages/profile/lib";
import { usersStore } from "entities/users";
import { useTranslation } from "features/locales";
import { restaurantsStore } from "entities/restaurants";
import { useOpenCreateRestaurantModal } from "features/create-restaurant";

import { useStyles } from "./styles";

const { restaurants } = restaurantsStore;

export const Profile = () => {
  const { openModal } = useOpenCreateRestaurantModal();
  const { t } = useTranslation();
  const { classes } = useStyles();

  const { logout } = useLogout();
  const meInfo = useStore(usersStore.$meInfo);
  const restaurantPreviews = useStore(restaurants.stores.$restaurants);

  return (
    <Group align="start" noWrap spacing="xl" className={classes.container}>
      <Stack>
        {meInfo && (
          <ProfileCard
            title="Your profile"
            email={meInfo.email}
            phone={meInfo.phone}
            fullName={meInfo.fullName}
          />
        )}
        <Button onClick={logout} color="dark">
          Logout
        </Button>
      </Stack>
      <Stack className={classes.content}>
        <Group position="apart">
          <Title>Restaurants</Title>
          <Button
            onClick={openModal}
            rightIcon={<IconPlus size={20} strokeWidth={2} color="white" />}
          >
            Create restaurant
          </Button>
        </Group>
        <Group spacing="sm" position="apart">
          {Object.values(restaurantPreviews).map((restaurant) => (
            <RestaurantPreviewCard
              key={restaurant.restaurant_id}
              {...restaurant}
            />
          ))}
        </Group>
      </Stack>
    </Group>
  );
};
