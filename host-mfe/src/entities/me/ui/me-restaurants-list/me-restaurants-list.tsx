import { Group } from "@mantine/core";
import { useStore } from "effector-react";

import { RestaurantPreview } from "entities/restaurant";
import { PRIVATE_PATH } from "shared/config";

import { $restaurants } from "../../model";

export const MeRestaurantsList = () => {
  const restaurants = useStore($restaurants);

  return (
    <Group spacing="sm" position="apart">
      {Object.values(restaurants).map((restaurant) => (
        <RestaurantPreview
          key={restaurant.restaurant_id}
          {...restaurant}
          link={PRIVATE_PATH.RESTAURANT(restaurant.restaurant_id)}
        />
      ))}
    </Group>
  );
};
