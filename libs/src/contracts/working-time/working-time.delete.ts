import { IsEnum, IsNumber } from "class-validator";

import { Responses } from "../../responses";
import { WEEKDAY } from "../../interfaces";

export namespace WorkingTimeDelete {
  export const topic = "working-time.delete.command";

  export class Request {
    @IsNumber()
    restaurant_id: number;

    @IsNumber()
    user_id: number;

    @IsEnum(WEEKDAY)
    weekday: WEEKDAY;
  }

  export class Response implements Responses.DeleteWorkingTime {
    weekday: WEEKDAY;
  }
}
