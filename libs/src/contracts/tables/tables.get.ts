import { IsNumber } from "class-validator";

import { Responses } from "../../responses";

export namespace TablesGet {
  export const topic = "tables.get.command";

  export class Request {
    @IsNumber()
    restaurant_id: number;

    @IsNumber()
    user_id: number;
  }

  export class Response implements Responses.GetRestaurantTables {
    tables: Responses.GetRestaurantTables["tables"];
  }
}
