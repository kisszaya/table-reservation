import { Controller, Logger } from "@nestjs/common";
import { Message, RMQMessage, RMQRoute, RMQValidate } from "nestjs-rmq";

import { BrokerService } from "@/broker";
import { ReservesService } from "./reserves.service";
import {
  ReservesChangeVisitorStatus,
  ReservesCreate,
  ReservesGetVisitor,
} from "kisszaya-table-reservation/lib/contracts";

@Controller()
export class ReservesController {
  private readonly logger = new Logger(ReservesController.name);

  constructor(
    private readonly brokerService: BrokerService,
    private readonly reservesService: ReservesService
  ) {}

  @RMQValidate()
  @RMQRoute(ReservesCreate.topic)
  async createReserve(
    data: ReservesCreate.Request,
    @RMQMessage msg: Message
  ): Promise<ReservesCreate.Response> {
    this.brokerService.setTraceId(msg);
    return this.reservesService.createReserve(data);
  }
  @RMQValidate()
  @RMQRoute(ReservesGetVisitor.topic)
  async getVisitorReserves(
    data: ReservesGetVisitor.Request,
    @RMQMessage msg: Message
  ): Promise<ReservesGetVisitor.Response> {
    this.brokerService.setTraceId(msg);
    return this.reservesService.getVisitorReserves(data);
  }

  @RMQValidate()
  @RMQRoute(ReservesChangeVisitorStatus.topic)
  async changeVisitorReserveStatus(
    data: ReservesChangeVisitorStatus.Request,
    @RMQMessage msg: Message
  ): Promise<ReservesChangeVisitorStatus.Response> {
    this.brokerService.setTraceId(msg);
    return this.reservesService.changeVisitorReserveStatus(data);
  }
}
