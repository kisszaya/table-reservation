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
}
