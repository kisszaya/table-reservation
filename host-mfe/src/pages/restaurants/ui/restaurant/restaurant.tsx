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
import { restaurantsLib } from "entities/restaurants";

import { useStyles } from "./styles";

export const Restaurant = () => {
  const { classes } = useStyles();
  const meInfo = useStore(usersStore.$meInfo);
  const { restaurantInfo } = restaurantsLib.useRestaurantInfo();
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
      <Group noWrap align="start" className={classes.container}>
        <Stack>
          {meInfo && (
            <ProfileCard
              title="Restaurant card"
              email={meInfo.email}
              fullName={meInfo.fullName}
              restaurantName={restaurantInfo?.name}
            />
          )}
          <Button onClick={onGoToProfile} color="dark">
            Go to profile
          </Button>
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
