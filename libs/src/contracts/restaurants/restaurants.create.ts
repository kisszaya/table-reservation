import { IsNumber, IsString } from "class-validator";

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
    }

    export class Response {
        status: "success";
    }
}
