import { HttpException, HttpStatus } from "@nestjs/common";

export class EmployeeWithEmailAlreadyExistException extends HttpException {
  constructor(email: string) {
    super(`Employee with email ${email} already exist`, HttpStatus.BAD_REQUEST);
  }
}
