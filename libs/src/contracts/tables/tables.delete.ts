import { IsNumber } from "class-validator";

import { Responses } from "../../responses";

export namespace TablesDelete {
  export const topic = "tables.delete.command";

  export class Request {
    @IsNumber()
    restaurant_id: number;

    @IsNumber()
    user_id: number;

    @IsNumber()
    table_id: number;
  }

  export class Response implements Responses.DeleteTable {
    table: Responses.DeleteTable["table"];
  }
}
