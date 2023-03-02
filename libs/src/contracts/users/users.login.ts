import { IsEmail, IsString } from "class-validator";

export namespace UsersLogin {
  export const topic = "users.login.command";

  export class Request {
    @IsEmail()
    email: string;

    @IsString()
    password: string;
  }

  export class Response {
    accessToken: string;

    refreshToken: string;
  }
}
