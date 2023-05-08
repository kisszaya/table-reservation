import {IsEnum, IsNumber} from "class-validator";
import {Requests} from "../../requests";
import {RESERVE_STATUS} from "../../interfaces";
import {Responses} from "../../responses";

export namespace ReservesChangeVisitorStatus {
    export const topic = "reserves.change-visitor-status.command";

    export class Request implements Requests.ChangeReserveVisitorStatus {

        @IsEnum(RESERVE_STATUS)
        status: RESERVE_STATUS.CANCELED

        @IsNumber()
        reserve_id: number
    }

    export class Response implements Responses.ChangeReserveVisitorStatus {
        reserve: Responses.ChangeReserveVisitorStatus['reserve']
    }
}
