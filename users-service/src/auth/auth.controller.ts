import { Controller, Logger } from "@nestjs/common";
import { Message, RMQMessage, RMQRoute, RMQValidate } from "nestjs-rmq";
import { AsyncLocalStorage } from "async_hooks";
import {
  UsersLogin,
  UsersRegister,
  UsersUpdateRefresh, UsersLogout
} from "kisszaya-table-reservation/lib/contracts";

import { AuthService } from "./auth.service";
import { BrokerService } from "@/broker";
import {ASYNC_STORAGE_KEYS} from "kisszaya-table-reservation/lib/const";

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
    this.brokerService.setTraceId(msg);

    // @ts-ignore
    // this.logger.setTraceId(msg.properties.headers[ASYNC_STORAGE_KEYS.TRACE_ID])
    // const asyncStorage = app.get(INJECT_TYPES.ASYNC_STORAGE);
    // const traceId = req.headers["x-request-id"] || uuidV4();
    // const store = new Map().set("traceId", traceId);
    //
    // asyncStorage.run(store, () => {
    //   next();
    // });

    // const asyncLocalStorage = new AsyncLocalStorage();
    // const store = new Map().set("traceId", msg.properties.headers[ASYNC_STORAGE_KEYS.TRACE_ID]);

    // asyncLocalStorage.run(store, () => console.log('meow'));

    const { user_id, role, status } = await this.authService.validateUser(
      data.email,
      data.password
    );

    const res = await this.authService.login(user_id, role, data.fingerprint);

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
