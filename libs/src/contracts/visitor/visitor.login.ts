import { IsString } from "class-validator";

import { USER_STATUS } from "../../interfaces";
import { Responses } from "../../responses";

export namespace VisitorLogin {
  export const topic = "visitor.login.command";

  export class Request {
    @IsString()
    phone: string;

    @IsString()
    fingerprint: string;
  }

  export class Response implements Responses.VisitorLogin {
    accessToken: string;
    refreshToken: string;
    status: USER_STATUS;
  }
}
