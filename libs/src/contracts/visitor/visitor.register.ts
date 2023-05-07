import { IsString, IsOptional, IsEmail } from "class-validator";
import { Requests } from "../../requests";

export namespace VisitorRegister {
  export const topic = "visitor.register.command";

  export class Request implements Requests.VisitorRegister {
    @IsEmail()
    @IsOptional()
    email?: string;

    @IsString()
    firstName: string;

    @IsString()
    lastName: string;

    @IsString()
    phone: string;
  }

  export class Response {
    user_id: number;
  }
}
