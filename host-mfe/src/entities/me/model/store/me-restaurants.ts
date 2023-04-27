import { createStore } from "effector";
import { IRestaurantUserPreview } from "kisszaya-table-reservation/lib/interfaces";
import { addRestaurant, setRestaurants } from "../events";

type IRestaurantsStore = Record<string, IRestaurantUserPreview>;

const $restaurants = createStore<IRestaurantsStore>({});

$restaurants.on(addRestaurant, (state, payload) => ({
  ...state,
  [payload.restaurant_id]: payload,
}));
$restaurants.on(setRestaurants, (_, payload) => {
  let restaurants: IRestaurantsStore = {};
  payload.forEach((restaurant) => {
    restaurants[restaurant.restaurant_id] = restaurant;
  });
  return restaurants;
});

export { $restaurants };
