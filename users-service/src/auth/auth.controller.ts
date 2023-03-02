import { Controller, Logger } from "@nestjs/common";
import { Message, RMQMessage, RMQRoute, RMQValidate } from "nestjs-rmq";
import {
  UsersLogin,
  UsersRegister,
} from "kisszaya-table-reservation/lib/contracts";
import { ASYNC_STORAGE_KEYS } from "kisszaya-table-reservation/lib/const";

import { AuthService } from "./auth.service";

@Controller()
export class AuthController {
  private readonly logger = new Logger(AuthController.name);

  constructor(private readonly authService: AuthService) {}

  @RMQValidate()
  @RMQRoute(UsersLogin.topic)
  async login(
    data: UsersLogin.Request,
    @RMQMessage msg: Message
  ): Promise<UsersLogin.Response> {
    const traceId = msg.properties.headers[ASYNC_STORAGE_KEYS.TRACE_ID];
    this.logger.log(`traceId: ${traceId}`)

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
    return {
      accessToken: "accessToken",
      refreshToken: "refreshToken",
    };
  }
}
