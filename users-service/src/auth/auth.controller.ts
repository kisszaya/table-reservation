import { Controller, Logger } from "@nestjs/common";
import { Message, RMQMessage, RMQRoute, RMQValidate } from "nestjs-rmq";
import {
  UsersLogin,
  UsersRegister,
  UsersUpdateRefresh,
  UsersLogout,
} from "kisszaya-table-reservation/lib/contracts";

import { AuthService } from "./auth.service";
import { BrokerService } from "@/broker";
import { VisitorRegister } from "kisszaya-table-reservation/lib/contracts/visitor/visitor.register";
import { VisitorAuthService } from "@/auth/visitor-auth.service";
import { VisitorLogin } from "kisszaya-table-reservation/lib/contracts/visitor/visitor.login";

@Controller()
export class AuthController {
  private readonly logger = new Logger(AuthController.name);

  constructor(
    private readonly authService: AuthService,
    private readonly visitorAuthService: VisitorAuthService,
    private readonly brokerService: BrokerService
  ) {}

  @RMQValidate()
  @RMQRoute(UsersLogin.topic)
  async login(
    data: UsersLogin.Request,
    @RMQMessage msg: Message
  ): Promise<UsersLogin.Response> {
    this.brokerService.setTraceId(msg);

    const { user_id, status } = await this.authService.validateUser(
      data.email,
      data.password
    );

    const res = await this.authService.login(user_id, data.fingerprint);

    return { ...res, status };
  }

  @RMQValidate()
  @RMQRoute(VisitorLogin.topic)
  async visitorLogin(
    data: VisitorLogin.Request,
    @RMQMessage msg: Message
  ): Promise<VisitorLogin.Response> {
    this.brokerService.setTraceId(msg);

    const { user_id, status } = await this.visitorAuthService.validateUser(
      data.phone
    );

    const res = await this.visitorAuthService.login(user_id, data.fingerprint);

    return { ...res, status };
  }

  @RMQValidate()
  @RMQRoute(UsersRegister.topic)
  async register(
    data: UsersRegister.Request,
    @RMQMessage msg: Message
  ): Promise<UsersRegister.Response> {
    this.brokerService.setTraceId(msg);
    return this.authService.register(data);
  }

  @RMQValidate()
  @RMQRoute(VisitorRegister.topic)
  async visitorRegister(
    data: VisitorRegister.Request,
    @RMQMessage msg: Message
  ): Promise<VisitorRegister.Response> {
    this.brokerService.setTraceId(msg);
    return this.visitorAuthService.register(data);
  }

  @RMQValidate()
  @RMQRoute(UsersUpdateRefresh.topic)
  async refresh(
    data: UsersUpdateRefresh.Request,
    @RMQMessage msg: Message
  ): Promise<UsersUpdateRefresh.Response> {
    this.brokerService.setTraceId(msg);
    return this.authService.refresh(data);
  }

  @RMQValidate()
  @RMQRoute(UsersLogout.topic)
  async logout(
    data: UsersLogout.Request,
    @RMQMessage msg: Message
  ): Promise<UsersLogout.Response> {
    this.brokerService.setTraceId(msg);
    return this.authService.logout(data);
  }
}
