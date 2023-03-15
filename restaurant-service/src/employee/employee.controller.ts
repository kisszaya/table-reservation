import { Controller, Logger } from "@nestjs/common";

import { BrokerService } from "@/broker";
import { RestaurantsService } from "@/restaurants/restaurants.service";

@Controller()
export class EmployeeController {
    private readonly logger = new Logger(EmployeeController.name);

    constructor(
        private readonly brokerService: BrokerService,
        private readonly employeeService: RestaurantsService
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
