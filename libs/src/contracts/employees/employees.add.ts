import { IsArray, IsNumber, IsOptional, IsString } from "class-validator";

import { USER_ROLE } from "../../interfaces";

export namespace EmployeesAdd {
  export const topic = "employees.add.command";

  export class Request {
    @IsString()
    @IsOptional()
    firstName?: string;

    @IsString()
    @IsOptional()
    lastName?: string;

    @IsString()
    @IsOptional()
    password?: string;

    @IsOptional()
    @IsString()
    phone?: string;

    @IsString()
    email: string;

    @IsArray()
    roles: USER_ROLE[];

    @IsNumber()
    restaurant_id: number;

    @IsNumber()
    user_id: number;
  }

  export class Response {
    employee_id: number;
    fullName: string;
    email: string;
    user_id: number;
    roles: USER_ROLE[];
  }
}
