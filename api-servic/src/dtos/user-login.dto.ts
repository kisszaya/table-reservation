import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
import { Requests } from "kisszaya-table-reservation/lib/requests";

export class UserLoginDto implements Requests.UserLogin {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  password: string;
}
