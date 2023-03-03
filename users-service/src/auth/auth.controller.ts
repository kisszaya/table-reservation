import { Controller, Logger } from "@nestjs/common";
import { Message, RMQMessage, RMQRoute, RMQValidate } from "nestjs-rmq";
import {
  UsersLogin,
  UsersRegister,
} from "kisszaya-table-reservation/lib/contracts";

import { AuthService } from "./auth.service";
import { BrokerService } from "@/broker";

@Controller()
export class AuthController {
  private readonly logger = new Logger(AuthController.name);

  constructor(
    private readonly authService: AuthService,
    private readonly brokerService: BrokerService
  ) {}

  @RMQValidate()
  @RMQRoute(UsersLogin.topic)
  async login(
    data: UsersLogin.Request,
    @RMQMessage msg: Message
  ): Promise<UsersLogin.Response> {
    this.brokerService.setTraceId(msg)
    return {
      accessToken: "accessToken",
      refreshToken: "refreshToken",
    };
  }

  @RMQValidate()
  @RMQRoute(UsersRegister.topic)
  async register(
    data: UsersRegister.Request,
    @RMQMessage msg: Message
  ): Promise<UsersRegister.Response> {
    this.brokerService.setTraceId(msg)

    return {
      accessToken: "accessToken",
      refreshToken: "refreshToken",
    };
  }
}
