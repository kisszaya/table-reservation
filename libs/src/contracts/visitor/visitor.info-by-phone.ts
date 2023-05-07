import { IsString } from "class-validator";

import { USER_STATUS } from "../../interfaces";

export namespace VisitorInfoByPhone {
  export const topic = "visitor.info-by-phone.command";

  export class Request {
    @IsString()
    phone: string;
  }

  export class Response {
    user: {
      user_id: number;
      fullName: string;
      email: string;
      phone: string;
      status: USER_STATUS;
    };
  }
}
