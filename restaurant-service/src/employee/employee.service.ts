import { Injectable, Logger } from "@nestjs/common";

import { EmployeeRepository } from "@/repositories";
import {
  IEmployee,
  USER_ROLE,
} from "kisszaya-table-reservation/lib/interfaces";
import { EmployeeEntity } from "@/entities";

@Injectable()
export class EmployeeService {
  private readonly logger = new Logger(EmployeeService.name);

  constructor(private readonly employeeRepository: EmployeeRepository) {}

  public async create(
    data: Pick<IEmployee, "roles" | "restaurant_id" | "user_id">
  ): Promise<{ restaurant_id: number; roles: USER_ROLE[] }> {
    this.logger.log("create");
    const newEmployeeEntity = new EmployeeEntity(data);

    const { restaurant_id, roles } =
      await this.employeeRepository.createEmployee(newEmployeeEntity);

    return {
      restaurant_id,
      roles,
    };
  }

  public async getUserRestaurantIds(
    user_id: number
  ): Promise<{ restaurants: { restaurant_id: number; roles: USER_ROLE[] }[] }> {
    this.logger.log("get user restaurantIds");

    const employees = await this.employeeRepository.findEmployeesByUserId(
      user_id
    );

    return {
      restaurants: employees.map((el) => ({
        restaurant_id: el.restaurant_id,
        roles: el.roles,
      })),
    };
  }
}
