import { createEvent, createStore } from "effector";
import { IRestaurantUserPreview } from "kisszaya-table-reservation/lib/interfaces";

const addRestaurantPreviews = createEvent<IRestaurantUserPreview[]>();

const setRestaurantPreviews = createEvent<IRestaurantUserPreview[]>();

const $restaurantPreviews = createStore<IRestaurantUserPreview[]>([])
  .on(addRestaurantPreviews, (state, payload) => [...state, ...payload])
  .on(setRestaurantPreviews, (_, payload) => payload);

export { addRestaurantPreviews, $restaurantPreviews, setRestaurantPreviews };
