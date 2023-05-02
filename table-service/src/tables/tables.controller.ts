import { Controller, Logger } from "@nestjs/common";
import { Message, RMQMessage, RMQRoute, RMQValidate } from "nestjs-rmq";

import { BrokerService } from "@/broker";
import { TablesService } from "./tables.service";

@Controller()
export class TablesController {
  private readonly logger = new Logger(TablesController.name);

  constructor(
    private readonly brokerService: BrokerService,
    private readonly tablesService: TablesService
  ) {}

  // @RMQValidate()
  // @RMQRoute(WorkingTimeChange.topic)
  // async changeWorkingTime(
  //   data: WorkingTimeChange.Request,
  //   @RMQMessage msg: Message
  // ): Promise<WorkingTimeChange.Response> {
  //   this.brokerService.setTraceId(msg);
  //   return this.workingTimeService.changeWorkingTime(data);
  // }
  //
  // @RMQValidate()
  // @RMQRoute(WorkingTimeGet.topic)
  // async getWorkingTime(
  //   data: WorkingTimeGet.Request,
  //   @RMQMessage msg: Message
  // ): Promise<WorkingTimeGet.Response> {
  //   this.brokerService.setTraceId(msg);
  //   return this.workingTimeService.getWorkingTime(data);
  // }
}
