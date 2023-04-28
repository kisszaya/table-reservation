import { IsNumber } from "class-validator";

import { Responses } from "../../responses";

export namespace WorkingTimeGet {
  export const topic = "working-time.get.command";

  export class Request {
    @IsNumber()
    restaurant_id: number;

    @IsNumber()
    user_id: number;
  }

  export class Response implements Responses.GetRestaurantWorkingTime {
    workingTime: Responses.GetRestaurantWorkingTime["workingTime"];
  }
}
