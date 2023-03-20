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

  @IsArray()
  roles: USER_ROLE[];
}
