import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { EmployeeModel } from "@/models";
import { EmployeeRepository } from "@/repositories";
import { EmployeeService } from "@/employee/employee.service";
import { EmployeeController } from "@/employee/employee.controller";

@Module({
  imports: [TypeOrmModule.forFeature([EmployeeModel])],
  providers: [EmployeeService, EmployeeRepository],
  controllers: [EmployeeController],
  exports: [EmployeeService],
})
export class EmployeeModule {}
