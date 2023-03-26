import { IsArray } from "class-validator";

import { USER_STATUS } from "../../interfaces";

export namespace UsersByIdInfo {
  export const topic = "users.info-by-id.command";

  export class Request {
    @IsArray()
    userIds: number[];
  }

  export class Response {
    users: {
      user_id: number;
      fullName: string;
      email: string;
      phone?: string;
      status: USER_STATUS;
    }[];
  }
}
