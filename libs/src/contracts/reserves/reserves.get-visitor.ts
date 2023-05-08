import {IsNumber} from "class-validator";
import {Responses} from "../../responses";

export namespace ReservesGetVisitor {
    export const topic = "reserves.get-visitor.command";

    export class Request {

        @IsNumber()
        user_id: number
    }

    export class Response implements Responses.GetVisitorReserves {
        reserves: Responses.GetVisitorReserves['reserves']
    }
}
