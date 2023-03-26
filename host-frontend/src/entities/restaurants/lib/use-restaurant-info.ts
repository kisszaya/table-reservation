import { useRouter } from "next/router";
import { useStore } from "effector-react";

import { restaurantsStore } from "entities/restaurants";

export const useRestaurantInfo = () => {
  const { query } = useRouter();
  const restaurants = useStore(
    restaurantsStore.restaurants.stores.$restaurants
  );

  console.log('restaurants', restaurants)

  return { restaurantInfo: restaurants[query.id as string] };
};
