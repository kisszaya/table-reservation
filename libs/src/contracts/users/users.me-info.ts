import { IsNumber } from "class-validator";

import { USER_ROLE, USER_STATUS } from "../../interfaces";

export namespace UsersMeInfo {
  export const topic = "users.me-info.command";

  export class Request {
    @IsNumber()
    user_id: number;
  }

  export class Response {
    fullName: string;
    email: string;
    phone?: string;
    role: USER_ROLE;
    status: USER_STATUS;
  }
}
