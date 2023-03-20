import { IsString } from "class-validator";

import { USER_STATUS } from "../../interfaces";

export namespace UsersInfo {
  export const topic = "users.info.command";

  export class Request {
    @IsString()
    email: string;
  }

  export class Response {
    user_id: number;
    fullName: string;
    email: string;
    phone?: string;
    status: USER_STATUS;
  }
}
