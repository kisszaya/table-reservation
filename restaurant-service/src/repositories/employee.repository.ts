import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { EmployeeModel } from "@/models";
import { EmployeeEntity } from "@/entities";

@Injectable()
export class EmployeeRepository {
  private readonly logger = new Logger(EmployeeRepository.name);

  constructor(
    @InjectRepository(EmployeeModel)
    private readonly employeeModel: Repository<EmployeeModel>
  ) {}

  public async createEmployee(employee: EmployeeEntity) {
    this.logger.log("create new employee");

    const newEmployee = this.employeeModel.create(employee);

    await this.employeeModel.save(newEmployee);
    return newEmployee;
  }

  public async findEmployeeById(employee_id: number) {
    this.logger.log("find employee by id");

    return this.employeeModel.findOneBy({ employee_id });
  }

  public async deleteEmployeeById(employee_id: number) {
    this.logger.log("delete employee by id");

    return this.employeeModel.delete({ employee_id });
  }

  public async findEmployeesByUserId(user_id: number) {
    this.logger.log("find employees by user_id");

    return this.employeeModel.findBy({ user_id });
  }

  public async findEmployeesByRestaurantId(restaurant_id: number) {
    this.logger.log("find employees by restaurant_id");

    return this.employeeModel.findBy({ restaurant_id });
  }

  public async findEmployeeByRestaurantIdAndUserId(
    restaurant_id: number,
    user_id: number
  ) {
    this.logger.log("find employees by user_id and restaurant_id");

    return this.employeeModel.findOneBy({ restaurant_id, user_id });
  }
}
