import { IsNumber } from "class-validator";

import { USER_ROLE } from "../../interfaces";

export namespace EmployeesDelete {
  export const topic = "employees.delete.command";

  export class Request {
    @IsNumber()
    restaurant_id: number;

    @IsNumber()
    user_id: number;

    @IsNumber()
    employee_id: number;
  }

  export class Response {
    employee_id: number;
    fullName: string;
    email: string;
    user_id: number;
    roles: USER_ROLE[];
  }
}
