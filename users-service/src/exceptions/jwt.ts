import { HttpException, HttpStatus } from "@nestjs/common";

export class TokenExpiredException extends HttpException {
  constructor() {
    super(`Token expired`, HttpStatus.UNAUTHORIZED);
  }
}

export class InvalidSessionException extends HttpException {
  constructor() {
    super(`Fingerprint invalid`, HttpStatus.BAD_REQUEST);
  }
}
