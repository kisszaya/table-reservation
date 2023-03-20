import { IsNumber } from "class-validator";

import { USER_ROLE } from "../../interfaces";

export namespace RestaurantsGetById {
  export const topic = "restaurants.get-by-id.command";

  export class Request {
    @IsNumber()
    user_id: number;

    @IsNumber()
    restaurant_id: number;
  }

  export class Response {
      restaurant_id: number;
      name: string;
      roles: USER_ROLE[];
      photos: string[];
      address: string;
      city: string;
  }
}
