import { IsNumber } from "class-validator";

import { USER_ROLE } from "../../interfaces";

export namespace RestaurantsGetUser {
  export const topic = "restaurants.get-user.command";

  export class Request {
    @IsNumber()
    user_id: number;
  }

  export class Response {
    restaurants: {
      restaurant_id: number;
      name: string;
      roles: USER_ROLE[];
      photos: string[];
      address: string;
      city: string;
    }[];
  }
}
