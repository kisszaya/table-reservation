import { HttpException, HttpStatus } from "@nestjs/common";

export class NoRefreshToken extends HttpException {
  constructor() {
    super("No refresh token in cookies", HttpStatus.BAD_REQUEST);
  }
}

export class TokenExpiredException extends HttpException {
  constructor() {
    super(`Token expired`, HttpStatus.UNAUTHORIZED);
  }
}

export class NoUserIdInRefreshToken extends HttpException {
  constructor() {
    super("No userId in refresh token payload", HttpStatus.BAD_REQUEST);
  }
}
