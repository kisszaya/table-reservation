import { Injectable, Logger } from "@nestjs/common";

import { EmployeeRepository } from "@/repositories";
import {
  IEmployee,
  USER_ROLE,
} from "kisszaya-table-reservation/lib/interfaces";
import { EmployeeEntity } from "@/entities";
import {
  EmployeesAdd,
  EmployeesDelete,
  EmployeesGetRestaurant,
} from "kisszaya-table-reservation/lib/contracts";

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

  public async addToRestaurant(
    data: EmployeesAdd.Request
  ): Promise<EmployeesAdd.Response> {
    this.logger.log("add employee to restaurant");

    return { employee_id: 1, user_id: 1, roles: [], email: '', fullName: '' };
  }

  public async deleteFromRestaurant(
    data: EmployeesDelete.Request
  ): Promise<EmployeesDelete.Response> {
    this.logger.log("remove employee from restaurant");

    return { employee_id: 1, user_id: 1, roles: [], email: '', fullName: '' };
  }

  public async getAllFromRestaurant(
    data: EmployeesGetRestaurant.Request
  ): Promise<EmployeesGetRestaurant.Response> {
    this.logger.log("get all employees from restaurant");

    return { employees: [] };
  }
}
