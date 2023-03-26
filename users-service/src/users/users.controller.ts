import { Controller, Logger } from "@nestjs/common";
import { Message, RMQMessage, RMQRoute, RMQValidate } from "nestjs-rmq";
import {
  UsersMeInfo,
  UsersInfo,
  UsersByIdInfo,
} from "kisszaya-table-reservation/lib/contracts";

import { BrokerService } from "@/broker";
import { UsersService } from "./users.service";

@Controller()
export class UsersController {
  private readonly logger = new Logger(UsersController.name);

  constructor(
    private readonly usersService: UsersService,
    private readonly brokerService: BrokerService
  ) {}

  @RMQValidate()
  @RMQRoute(UsersMeInfo.topic)
  async meInfo(
    data: UsersMeInfo.Request,
    @RMQMessage msg: Message
  ): Promise<UsersMeInfo.Response> {
    this.brokerService.setTraceId(msg);
    return this.usersService.meInfo(data);
  }

  @RMQValidate()
  @RMQRoute(UsersInfo.topic)
  async infoByEmail(
    data: UsersInfo.Request,
    @RMQMessage msg: Message
  ): Promise<UsersInfo.Response> {
    this.brokerService.setTraceId(msg);
    return this.usersService.infoByEmail(data.email);
  }

  @RMQValidate()
  @RMQRoute(UsersByIdInfo.topic)
  async infoByUserIds(
    data: UsersByIdInfo.Request,
    @RMQMessage msg: Message
  ): Promise<UsersByIdInfo.Response> {
    this.brokerService.setTraceId(msg);
    return this.usersService.infoByUserIds(data);
  }
}
