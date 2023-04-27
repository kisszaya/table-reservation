import { createEvent } from "effector";
import { IRestaurantUserPreview } from "kisszaya-table-reservation/lib/interfaces";

const setRestaurantInfo = createEvent<IRestaurantUserPreview>();

const clearRestaurantInfo = createEvent();

export { setRestaurantInfo, clearRestaurantInfo };
