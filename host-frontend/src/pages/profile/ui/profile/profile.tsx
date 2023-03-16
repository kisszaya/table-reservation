import { Button, Group, Stack } from "@mantine/core";
import { useStore } from "effector-react";

import { useTranslation } from "features/locales";
import { ProfileCard, RestaurantReviewCard } from "widgets";
import { Title } from "shared/ui";
import { useLogout } from "pages/profile/lib";
import { openCreateRestaurantModal } from "..";
import { usersStore } from "entities/users";
import { restaurantsStore } from "entities/restaurants";

export const Profile = () => {
  const { t } = useTranslation();

  const { logout } = useLogout();
  const meInfo = useStore(usersStore.$meInfo);
  const restaurantPreviews = useStore(restaurantsStore.$restaurantPreviews);

  return (
    <Group>
      <Stack>
        {meInfo && (
          <ProfileCard
            email={meInfo.email}
            phone={meInfo.phone}
            fullName={meInfo.fullName}
          />
        )}
        <Button onClick={logout}>Logout</Button>
      </Stack>
      <Stack>
        <Group>
          <Title>Restaurants</Title>
          <Button onClick={openCreateRestaurantModal}>Create restaurant</Button>
        </Group>
        <Stack>
          {restaurantPreviews.map((restaurant) => (
            <RestaurantReviewCard
              key={restaurant.restaurant_id}
              {...restaurant}
            />
          ))}
        </Stack>
      </Stack>
    </Group>
  );
};
