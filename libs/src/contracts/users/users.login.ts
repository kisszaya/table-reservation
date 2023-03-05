import { IsEmail, IsString } from "class-validator";

import { USER_ROLE, USER_STATUS } from "../../interfaces";

export namespace UsersLogin {
  export const topic = "users.login.command";

  export class Request {
    @IsEmail()
    email: string;

    @IsString()
    password: string;

    @IsString()
    fingerprint: string;
  }

  export class Response {
    accessToken: string;
    refreshToken: string;
    role: USER_ROLE;
    status: USER_STATUS;
  }
}
