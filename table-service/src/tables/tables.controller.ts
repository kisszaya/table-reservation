import { Controller, Logger } from "@nestjs/common";
import { Message, RMQMessage, RMQRoute, RMQValidate } from "nestjs-rmq";

import { BrokerService } from "@/broker";
import { TablesService } from "./tables.service";
import {
  TablesCreate,
  TablesDelete,
  TablesGet,
  TablesGetFree,
} from "kisszaya-table-reservation/lib/contracts";

@Controller()
export class TablesController {
  private readonly logger = new Logger(TablesController.name);

  constructor(
    private readonly brokerService: BrokerService,
    private readonly tablesService: TablesService
  ) {}

  @RMQValidate()
  @RMQRoute(TablesCreate.topic)
  async createTable(
    data: TablesCreate.Request,
    @RMQMessage msg: Message
  ): Promise<TablesCreate.Response> {
    this.brokerService.setTraceId(msg);
    return this.tablesService.createTable(data);
  }
  @RMQValidate()
  @RMQRoute(TablesGet.topic)
  async getTables(
    data: TablesGet.Request,
    @RMQMessage msg: Message
  ): Promise<TablesGet.Response> {
    this.brokerService.setTraceId(msg);
    return this.tablesService.getTables(data);
  }

  @RMQValidate()
  @RMQRoute(TablesGetFree.topic)
  async getFreeTables(
    data: TablesGetFree.Request,
    @RMQMessage msg: Message
  ): Promise<TablesGetFree.Response> {
    this.brokerService.setTraceId(msg);
    return this.tablesService.getFreeTables(data);
  }

  @RMQValidate()
  @RMQRoute(TablesDelete.topic)
  async deleteTable(
    data: TablesDelete.Request,
    @RMQMessage msg: Message
  ): Promise<TablesDelete.Response> {
    this.brokerService.setTraceId(msg);
    return this.tablesService.deleteTable(data);
  }
}
