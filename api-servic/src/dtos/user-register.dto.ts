import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from "class-validator";
import { USER_ROLE } from "kisszaya-table-reservation/lib/interfaces";
import { Requests } from "kisszaya-table-reservation/lib/requests";

export class UserRegisterDto implements Requests.UserRegister {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  password: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsEnum(USER_ROLE)
  role: USER_ROLE;
}
