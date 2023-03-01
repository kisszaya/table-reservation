import { Controller, Logger } from "@nestjs/common";
import { RMQRoute } from "nestjs-rmq";

@Controller("users")
export class UsersController {
  private readonly logger = new Logger(UsersController.name);

  constructor() {}

  @RMQRoute("")
  getHello(): string {
    return "";
  }
}
