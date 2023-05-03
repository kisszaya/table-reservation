import { IsNumber } from "class-validator";

import { Responses } from "../../responses";
import { Requests } from "../../requests";

export namespace TablesCreate {
  export const topic = "tables.create.command";

  export class Request {
    @IsNumber()
    restaurant_id: number;

    @IsNumber()
    user_id: number;

    table: Requests.CreateTable;
  }

  export class Response implements Responses.CreateTable {
    table: Responses.CreateTable["table"];
  }
}
