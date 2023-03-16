import { createEvent, createStore } from "effector";
import { IRestaurantUserPreview } from "kisszaya-table-reservation/lib/interfaces";

const addRestaurantPreviews = createEvent<IRestaurantUserPreview[]>();

const $restaurantPreviews = createStore<IRestaurantUserPreview[]>([]).on(
  addRestaurantPreviews,
  (state, payload) => [...state, ...payload]
);

export { addRestaurantPreviews, $restaurantPreviews };
