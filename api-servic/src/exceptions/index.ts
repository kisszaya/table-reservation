import { HttpException, HttpStatus } from "@nestjs/common";

export class InternalException extends HttpException {
    constructor(error) {
        super(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}

