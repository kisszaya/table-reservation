import { IsNumber, IsString } from "class-validator";
import {USER_ROLE} from "../../interfaces";

export namespace RestaurantsCreate {
    export const topic = "restaurants.create.command";

    export class Request {
        @IsString()
        name: string;

        @IsString()
        city: string;

        @IsString()
        address: string;

        @IsString()
        phone: string;

        @IsNumber()
        user_id: number
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
