import { IsEmail, IsString} from "class-validator";

export class UserRegisterDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  password: string;

  @IsString()
  phone: string;

  @IsEmail()
  email: string;
}
