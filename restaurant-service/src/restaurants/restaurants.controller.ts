import { Controller, Logger } from "@nestjs/common";
import { Message, RMQMessage, RMQRoute, RMQValidate } from "nestjs-rmq";
import {
  RestaurantsCreate,
  RestaurantsGetById,
  RestaurantsGetUser,
} from "kisszaya-table-reservation/lib/contracts";

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
  async create(
    data: RestaurantsCreate.Request,
    @RMQMessage msg: Message
  ): Promise<RestaurantsCreate.Response> {
    this.brokerService.setTraceId(msg);
    return this.restaurantService.create(data);
  }

  @RMQValidate()
  @RMQRoute(RestaurantsGetUser.topic)
  async getMe(
    data: RestaurantsGetUser.Request,
    @RMQMessage msg: Message
  ): Promise<RestaurantsGetUser.Response> {
    this.brokerService.setTraceId(msg);
    return await this.restaurantService.getMe(data.user_id);
  }

  @RMQValidate()
  @RMQRoute(RestaurantsGetById.topic)
  async getById(
    data: RestaurantsGetById.Request,
    @RMQMessage msg: Message
  ): Promise<RestaurantsGetById.Response> {
    this.brokerService.setTraceId(msg);
    return await this.restaurantService.getById(data);
  }
}
