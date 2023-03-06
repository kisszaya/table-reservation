import { IsString, IsOptional } from "class-validator";

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
  }

  export class Response {
    status: "success";
  }
}
