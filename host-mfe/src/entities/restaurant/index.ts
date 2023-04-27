import {
  $restaurantInfo,
  clearRestaurantInfo,
  setRestaurantInfo,
} from "./model";

export const restaurantStore = {
  $restaurantInfo,
};

export const restaurantEvents = {
  clearRestaurantInfo,
  setRestaurantInfo,
};

export {
  RestaurantPreview,
  RestaurantProfileCard,
  RestaurantServices,
} from "./ui";

export type { IRestaurantServices } from "./types";

export * as restaurantServerApi from "./server-api";
