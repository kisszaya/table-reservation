import { TagsGet } from "kisszaya-table-reservation/lib/contracts";
import { Controller, Get, Logger } from "@nestjs/common";

import { BrokerService } from "@/broker";
import { InternalException } from "@/exceptions";

@Controller("tags")
export class TagsController {
  private readonly logger = new Logger(TagsController.name);

  constructor(private readonly brokerService: BrokerService) {}

  @Get("/")
  async getTags() {
    this.logger.log(`GET /api/tags`);

    try {
      return await this.brokerService.publish<
        TagsGet.Request,
        TagsGet.Response
      >(TagsGet.topic, {});
    } catch (e) {
      throw new InternalException(e);
    }
  }
}
