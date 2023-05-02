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

export class RestaurantBlockedForUserException extends HttpException {
  constructor() {
    super(`Restaurant blocked for user`, HttpStatus.FORBIDDEN);
  }
}

export class UserDontHaveAccessException extends HttpException {
  constructor(user_id: number) {
    super(`User with id ${user_id} don't have access`, HttpStatus.FORBIDDEN);
  }
}

export class RestaurantNotFoundForUserException extends HttpException {
  constructor() {
    super(`Restaurant not found for user`, HttpStatus.NOT_FOUND);
  }
}

export class RestaurantNotFoundException extends HttpException {
  constructor(restaurant_id: number) {
    super(
      `Restaurant with id ${restaurant_id} not found`,
      HttpStatus.NOT_FOUND
    );
  }
}
