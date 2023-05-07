import { IsNotEmpty, IsString } from "class-validator";
import { Requests } from "kisszaya-table-reservation/lib/requests";

export class VisitorLoginDto implements Requests.VisitorLogin {
  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsNotEmpty()
  @IsString()
  fingerprint: string;
}
