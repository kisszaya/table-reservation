import {Responses} from "../../responses";
import {Requests} from "../../requests";
import {IsNumber, IsString} from "class-validator";
import {USER_STATUS} from "../../interfaces";

export namespace ReservesCreate {
    export const topic = "reserves.create.command";

    export class Request implements Requests.CreateReserve {
        @IsNumber()
        restaurant_id: number

        @IsNumber()
        day: number;

        @IsString()
        email: string;

        @IsString()
        first_name: string;

        @IsString()
        last_name: string;

        @IsNumber()
        month: number;

        @IsNumber()
        persons_count: number;

        @IsString()
        phone: string;

        @IsNumber()
        table_id: number;

        @IsNumber()
        time: number;
    }

    export class Response implements Responses.CreateReserve {
        accessToken: string
        status: USER_STATUS;
    }
}
