import {
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from "class-validator";
import { USER_ROLE } from "kisszaya-table-reservation/lib/interfaces";
import { Requests } from "kisszaya-table-reservation/lib/requests";

export class RestaurantEmployeeAddDto
  implements Requests.AddRestaurantEmployee
{
  @IsOptional()
  @IsString()
  firstName?: string;

  @IsOptional()
  @IsString()
  lastName?: string;

  @IsOptional()
  @IsString()
  @MinLength(6)
  password?: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsArray()
  roles: USER_ROLE[];
}
