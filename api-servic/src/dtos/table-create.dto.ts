import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
} from "class-validator";
import {
  SEAT_POSITION_VARIANT,
  SEAT_VARIANT,
  TABLE_VARIANT,
} from "kisszaya-table-reservation/lib/interfaces";
import { Requests } from "kisszaya-table-reservation/lib/requests";

export class CreateTableDto implements Requests.CreateTable {
  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  persons_count: number;

  @IsArray()
  seats: {
    variant: SEAT_VARIANT;
    position: SEAT_POSITION_VARIANT;
    position_id: number;
  }[];

  @IsArray()
  tags: string[];

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsEnum(TABLE_VARIANT)
  variant: TABLE_VARIANT;

  @IsNumber()
  @IsNotEmpty()
  height: number;

  @IsNumber()
  @IsNotEmpty()
  width: number;
}
