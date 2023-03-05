import { IsNumber, IsString } from "class-validator";

export namespace UsersLogout {
  export const topic = "users.logout.command";

  export class Request {
    @IsNumber()
    user_id: number;

    @IsString()
    refreshToken: string;
  }

  export class Response {
    status: "success";
  }
}
