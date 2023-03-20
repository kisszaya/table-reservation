import { Controller, Logger } from "@nestjs/common";
import { Message, RMQMessage, RMQRoute, RMQValidate } from "nestjs-rmq";

import { BrokerService } from "@/broker";
import { EmployeeService } from "@/employee/employee.service";
import {
  EmployeesAdd,
  EmployeesDelete,
  EmployeesGetRestaurant,
} from "kisszaya-table-reservation/lib/contracts";

@Controller()
export class EmployeeController {
  private readonly logger = new Logger(EmployeeController.name);

  constructor(
    private readonly brokerService: BrokerService,
    private readonly employeeService: EmployeeService
  ) {}

  @RMQValidate()
  @RMQRoute(EmployeesAdd.topic)
  async addEmployee(
    data: EmployeesAdd.Request,
    @RMQMessage msg: Message
  ): Promise<EmployeesAdd.Response> {
    this.brokerService.setTraceId(msg);
    return this.employeeService.addToRestaurant(data);
  }

  @RMQValidate()
  @RMQRoute(EmployeesDelete.topic)
  async deleteEmployee(
    data: EmployeesDelete.Request,
    @RMQMessage msg: Message
  ): Promise<EmployeesDelete.Response> {
    this.brokerService.setTraceId(msg);
    return this.employeeService.deleteFromRestaurant(data);
  }

  @RMQValidate()
  @RMQRoute(EmployeesGetRestaurant.topic)
  async getAllFromRestaurant(
    data: EmployeesGetRestaurant.Request,
    @RMQMessage msg: Message
  ): Promise<EmployeesGetRestaurant.Response> {
    this.brokerService.setTraceId(msg);
    return this.employeeService.getAllFromRestaurant(data);
  }
}
