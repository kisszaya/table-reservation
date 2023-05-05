import { IsNumber } from "class-validator";

import { Responses } from "../../responses";
import { Requests } from "../../requests";
import { USER_ROLE } from "../../interfaces";

export namespace RestaurantsChange {
  export const topic = "restaurants.change.command";

  export class Request {
    @IsNumber()
    restaurant_id: number;

    @IsNumber()
    user_id: number;

    restaurant: Requests.ChangeRestaurantInfo;
  }

  export class Response implements Responses.ChangeRestaurantInfo {
    address: string;
    city: string;
    name: string;
    photos: string[];
    restaurant_id: number;
    roles: USER_ROLE[];
  }
}
