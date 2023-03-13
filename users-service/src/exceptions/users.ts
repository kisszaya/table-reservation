import { HttpException, HttpStatus } from "@nestjs/common";

export class UserAlreadyExistException extends HttpException {
  constructor(searchedValue: string) {
    super(`User with ${searchedValue} already exist`, HttpStatus.CONFLICT);
  }
}

export class UserNotExistException extends HttpException {
  constructor(searchedValue: string) {
    super(`User with ${searchedValue} not found`, HttpStatus.NOT_FOUND);
  }
}

export class WrongCredentialsException extends HttpException {
  constructor(message: string) {
    super(message, HttpStatus.FORBIDDEN);
  }
}