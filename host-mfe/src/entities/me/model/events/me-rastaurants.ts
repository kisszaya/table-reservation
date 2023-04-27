import { createEvent } from "effector";
import { IRestaurantUserPreview } from "kisszaya-table-reservation/lib/interfaces";

const addRestaurant = createEvent<IRestaurantUserPreview>();
const setRestaurants = createEvent<IRestaurantUserPreview[]>();

export { addRestaurant, setRestaurants };
