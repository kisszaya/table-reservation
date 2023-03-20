import { IsNumber } from "class-validator";

import { IRestaurantEmployee } from "../../interfaces";

export namespace EmployeesGetRestaurant {
  export const topic = "employees.get-restaurant.command";

  export class Request {
    @IsNumber()
    restaurant_id: number;

    @IsNumber()
    user_id: number;
  }

  export class Response {
    employees: IRestaurantEmployee[];
  }
}
