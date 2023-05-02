import { Controller, Logger } from "@nestjs/common";
import { Message, RMQMessage, RMQRoute, RMQValidate } from "nestjs-rmq";

import { BrokerService } from "@/broker";
import {
  WorkingTimeChange,
  WorkingTimeGet,
} from "kisszaya-table-reservation/lib/contracts";
import { WorkingTimeService } from "@/working-time/working-time.service";

@Controller()
export class WorkingTimeController {
  private readonly logger = new Logger(WorkingTimeController.name);

  constructor(
    private readonly brokerService: BrokerService,
    private readonly workingTimeService: WorkingTimeService
  ) {}

  @RMQValidate()
  @RMQRoute(WorkingTimeChange.topic)
  async changeWorkingTime(
    data: WorkingTimeChange.Request,
    @RMQMessage msg: Message
  ): Promise<WorkingTimeChange.Response> {
    this.brokerService.setTraceId(msg);
    return this.workingTimeService.changeWorkingTime(data);
  }

  @RMQValidate()
  @RMQRoute(WorkingTimeGet.topic)
  async getWorkingTime(
    data: WorkingTimeGet.Request,
    @RMQMessage msg: Message
  ): Promise<WorkingTimeGet.Response> {
    this.brokerService.setTraceId(msg);
    return this.workingTimeService.getWorkingTime(data);
  }
}
