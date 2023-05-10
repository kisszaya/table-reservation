import { IsNotEmpty, IsString, IsNumber, IsEnum } from "class-validator";
import { RESERVE_SOURCE } from "kisszaya-table-reservation/lib/interfaces";
import { Requests } from "kisszaya-table-reservation/lib/requests";

export class ReserveCreateDto implements Requests.CreateReserve {
  @IsEnum(RESERVE_SOURCE)
  @IsNotEmpty()
  source: RESERVE_SOURCE;

  @IsNumber()
  @IsNotEmpty()
  day: number;

  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  first_name: string;

  @IsNotEmpty()
  @IsString()
  last_name: string;

  @IsNumber()
  @IsNotEmpty()
  month: number;

  @IsNumber()
  @IsNotEmpty()
  persons_count: number;

  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsNumber()
  @IsNotEmpty()
  table_id: number;

  @IsNumber()
  @IsNotEmpty()
  time: number;
}
