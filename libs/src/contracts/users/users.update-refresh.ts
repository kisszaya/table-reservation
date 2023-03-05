import { IsNumber, IsString } from "class-validator";

export namespace UsersUpdateRefresh {
  export const topic = "users.update-refresh.command";

  export class Request {
    @IsString()
    fingerprint: string;

    @IsNumber()
    user_id: number;

    @IsString()
    refreshToken: string;
  }

  export class Response {
    accessToken: string;
    refreshToken: string;
  }
}
