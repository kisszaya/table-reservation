import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from "class-validator";
import { USER_ROLE } from "kisszaya-table-reservation/lib/interfaces";

export class UserRegisterDto {
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
  role?: USER_ROLE;
}
