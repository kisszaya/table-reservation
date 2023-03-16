import { Group, Stack } from "@mantine/core";
import { useStore } from "effector-react";
import { useRouter } from "next/router";
import { useCallback } from "react";

import { useRestaurantServices } from "pages/restaurants/lib";
import {
  ProfileCard,
  RestaurantDiscounts,
  RestaurantEmployees,
  RestaurantServiceCard,
  RestaurantSettings,
} from "widgets";
import { usersStore } from "entities/users";
import { Button } from "shared/ui";
import { PRIVATE_PATH } from "shared/config";

export const Restaurant = () => {
  const meInfo = useStore(usersStore.$meInfo);
  const {
    restaurantServices,
    openedSettings,
    closeSettings,
    closeDiscounts,
    closeEmployees,
    openedEmployees,
    openedDiscounts,
  } = useRestaurantServices();
  const { push } = useRouter();

  const onGoToProfile = useCallback(async () => {
    await push(PRIVATE_PATH.PROFILE);
  }, []);

  return (
    <>
      <Group noWrap>
        <Stack align="start">
          {meInfo && (
            <ProfileCard
              email={meInfo.email}
              phone={meInfo.phone}
              fullName={meInfo.fullName}
            />
          )}
          <Button onClick={onGoToProfile}>Go to profile</Button>
        </Stack>
        <Group position="apart" spacing="sm">
          {restaurantServices.map((service) => (
            <RestaurantServiceCard
              key={service.title}
              isAvailable={true}
              {...service}
            />
          ))}
        </Group>
      </Group>

      <RestaurantSettings opened={openedSettings} close={closeSettings} />
      <RestaurantDiscounts opened={openedDiscounts} close={closeDiscounts} />
      <RestaurantEmployees opened={openedEmployees} close={closeEmployees} />
    </>
  );
};