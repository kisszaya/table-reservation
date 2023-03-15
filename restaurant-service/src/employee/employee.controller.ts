import { Controller, Logger } from "@nestjs/common";

import { BrokerService } from "@/broker";
import { EmployeeService } from "@/employee/employee.service";

@Controller()
export class EmployeeController {
  private readonly logger = new Logger(EmployeeController.name);

  constructor(
    private readonly brokerService: BrokerService,
    private readonly employeeService: EmployeeService
  ) {}

  // @RMQValidate()
  // @RMQRoute(RestaurantsCreate.topic)
  // async addEmployee(
  //     data: RestaurantsCreate.Request,
  //     @RMQMessage msg: Message
  // ): Promise<RestaurantsCreate.Response> {
  //     this.brokerService.setTraceId(msg);
  //     // return this.restaurantService.create(data);
  // }
}
