import { IsString, IsOptional, IsEnum } from "class-validator";

import { USER_ROLE } from "../../interfaces";

export namespace UsersRegister {
  export const topic = "users.register.command";

  export class Request {
    firstName: string;

    @IsString()
    lastName: string;

    @IsString()
    password: string;

    @IsOptional()
    @IsString()
    phone?: string;

    @IsString()
    email: string;

    @IsOptional()
    @IsEnum(USER_ROLE)
    role?: USER_ROLE;
  }

  export class Response {
    status: "success";
  }
}
