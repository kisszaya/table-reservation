import { Controller, Logger } from "@nestjs/common";
import { Message, RMQMessage, RMQRoute, RMQValidate } from "nestjs-rmq";

import { BrokerService } from "@/broker";
import { TagsService } from "./tags.service";
import {
  TagsGet,
  TagsGetRestaurant,
} from "kisszaya-table-reservation/lib/contracts";

@Controller()
export class TagsController {
  private readonly logger = new Logger(TagsController.name);

  constructor(
    private readonly brokerService: BrokerService,
    private readonly tagsService: TagsService
  ) {}

  @RMQValidate()
  @RMQRoute(TagsGet.topic)
  async getTags(
    data: TagsGet.Request,
    @RMQMessage msg: Message
  ): Promise<TagsGet.Response> {
    this.brokerService.setTraceId(msg);
    return this.tagsService.getTags(data);
  }

  @RMQValidate()
  @RMQRoute(TagsGetRestaurant.topic)
  async getRestaurantTags(
    data: TagsGetRestaurant.Request,
    @RMQMessage msg: Message
  ): Promise<TagsGetRestaurant.Response> {
    this.brokerService.setTraceId(msg);
    return this.tagsService.getRestaurantTags(data);
  }
}
