import { IRestaurantWorkingTime } from "kisszaya-table-reservation/lib/interfaces";

export class RestaurantWorkingTimeEntity implements IRestaurantWorkingTime {
  restaurant_working_time_id?: number;
  restaurant_id: number;
  working_time_id: number;

  constructor(restaurantWorkingTime: IRestaurantWorkingTime) {
    this.restaurant_id = restaurantWorkingTime.restaurant_id;
    this.restaurant_working_time_id =
      restaurantWorkingTime.restaurant_working_time_id;
    this.working_time_id = restaurantWorkingTime.working_time_id;
  }
}
