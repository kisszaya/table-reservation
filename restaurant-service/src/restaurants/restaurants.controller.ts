import { Controller, Logger } from "@nestjs/common";
import { Message, RMQMessage, RMQRoute, RMQValidate } from "nestjs-rmq";
import { RestaurantsCreate } from "kisszaya-table-reservation/lib/contracts";

import { BrokerService } from "@/broker";
import { RestaurantsService } from "@/restaurants/restaurants.service";

@Controller()
export class RestaurantsController {
  private readonly logger = new Logger(RestaurantsController.name);

  constructor(
    private readonly brokerService: BrokerService,
    private readonly restaurantService: RestaurantsService
  ) {}

  @RMQValidate()
  @RMQRoute(RestaurantsCreate.topic)
  async meInfo(
    data: RestaurantsCreate.Request,
    @RMQMessage msg: Message
  ): Promise<RestaurantsCreate.Response> {
    this.brokerService.setTraceId(msg);
    return this.restaurantService.create(data);
  }
}
