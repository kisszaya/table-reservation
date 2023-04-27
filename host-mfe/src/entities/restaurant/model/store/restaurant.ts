import { createStore } from "effector";
import { IRestaurantUserPreview } from "kisszaya-table-reservation/lib/interfaces";

import { clearRestaurantInfo, setRestaurantInfo } from "../events";

const $restaurantInfo = createStore<IRestaurantUserPreview | null>(null);

$restaurantInfo.on(setRestaurantInfo, (_, payload) => payload);

$restaurantInfo.reset(clearRestaurantInfo);

export { $restaurantInfo };
