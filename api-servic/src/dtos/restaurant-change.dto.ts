import { IsString, MinLength, IsOptional, IsArray } from "class-validator";
import { Requests } from "kisszaya-table-reservation/lib/requests";

export class RestaurantChangeDto implements Requests.ChangeRestaurantInfo {
  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsString()
  city?: string;

  @IsString()
  @IsOptional()
  @MinLength(6)
  name?: string;

  @IsOptional()
  @IsArray()
  photos?: string[];
}
