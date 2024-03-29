import { IsNumber } from "class-validator";

import { Responses } from "../../responses";
import { Requests } from "../../requests";

export namespace WorkingTimeChange {
  export const topic = "working-time.change.command";

  export class Request {
    @IsNumber()
    restaurant_id: number;

    @IsNumber()
    user_id: number;

    workingTime: Requests.ChangeRestaurantWorkingTime["workingTime"];
  }

  export class Response implements Responses.ChangeRestaurantWorkingTime {
    workingTime: Responses.ChangeRestaurantWorkingTime["workingTime"];
  }
}
