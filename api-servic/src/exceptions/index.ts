import { HttpException, HttpStatus } from "@nestjs/common";

export * from './jwt'
export class InternalException extends HttpException {
    constructor(error) {
        super(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}