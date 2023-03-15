import { Injectable, Logger } from "@nestjs/common";

import { EmployeeRepository } from "@/repositories";
import { IEmployee } from "kisszaya-table-reservation/lib/interfaces";
import { EmployeeEntity } from "@/entities";

@Injectable()
export class EmployeeService {
  private readonly logger = new Logger(EmployeeService.name);

  constructor(private readonly employeeRepository: EmployeeRepository) {}

  public async create(
    data: Pick<IEmployee, "roles" | "restaurant_id" | "user_id">
  ): Promise<{ status: "success" }> {
    this.logger.log("create");
    const newEmployeeEntity = new EmployeeEntity(data);

    await this.employeeRepository.createEmployee(newEmployeeEntity);

    return {
      status: "success",
    };
  }
}
