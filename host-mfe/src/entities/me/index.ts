import {
  changeMeInfo,
  $meInfo,
  setRestaurants,
  $restaurants,
  addRestaurant,
} from "./model";

export const meStore = {
  $meInfo,
  $restaurants,
};

export const meEvents = {
  changeMeInfo,
  setRestaurants,
  addRestaurant,
};

export * as meServerApi from "./server-api";

export { ProfileCard, MeRestaurantsList } from "./ui";
