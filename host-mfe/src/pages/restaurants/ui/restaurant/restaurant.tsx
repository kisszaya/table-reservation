import { Group, Stack } from "@mantine/core";

import { Button } from "shared/ui";
import { RestaurantProfileCard, RestaurantServices } from "entities/restaurant";
import { SettingsDrawer } from "entities/restaurant-settings";
import { DiscountsDrawer } from "entities/restaurant-discounts";
import { EmployeesDrawer } from "entities/restaurant-employees";

import { useRestaurantLib } from "../../lib";
import { useStyles } from "./styles";

export const Restaurant = () => {
  const { classes } = useStyles();
  const {
    services,
    openedSettings,
    closeSettings,
    closeDiscounts,
    closeEmployees,
    openedEmployees,
    openedDiscounts,
    redirectToProfile,
  } = useRestaurantLib();

  return (
    <>
      <Group noWrap align="start" className={classes.container}>
        <Stack>
          <RestaurantProfileCard />
          <Button onClick={redirectToProfile} color="dark">
            Go to profile
          </Button>
        </Stack>
        <RestaurantServices services={services} />
      </Group>

      <SettingsDrawer opened={openedSettings} close={closeSettings} />
      <DiscountsDrawer opened={openedDiscounts} close={closeDiscounts} />
      <EmployeesDrawer opened={openedEmployees} close={closeEmployees} />
    </>
  );
};
