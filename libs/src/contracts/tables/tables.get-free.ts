import { IsNumber } from "class-validator";

import { Responses } from "../../responses";

export namespace TablesGetFree {
    export const topic = "tables.get-free.command";

    export class Request {
        @IsNumber()
        restaurant_id: number;

        @IsNumber()
        day: number;

        @IsNumber()
        month: number;

        @IsNumber()
        time: number;
    }

    export class Response implements Responses.GetFreeRestaurantTables {
        tables: Responses.GetFreeRestaurantTables["tables"];
    }
}
