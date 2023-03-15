import {
  IsNotEmpty,
  IsString,
  MinLength,
  IsPhoneNumber,
} from "class-validator";
import { Requests } from "kisszaya-table-reservation/lib/requests";

export class RestaurantCreateDto implements Requests.CreateRestaurant {
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  password: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsString()
  city: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  name: string;

  @IsNotEmpty()
  @IsString()
  @IsPhoneNumber()
  phone: string;
}
