import { createEvent, createStore } from "effector";
import { IRestaurantUserPreview } from "kisszaya-table-reservation/lib/interfaces";

/**
 * Types
 **/
type IRestaurantsStore = Record<string, IRestaurantUserPreview>;

/**
 * Add restaurants handlers
 **/
const addRestaurant = createEvent<IRestaurantUserPreview>();
const setRestaurants = createEvent<IRestaurantUserPreview[]>();
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

export const events = {
  addRestaurant,
  setRestaurants,
};

export const stores = {
  $restaurants,
};
