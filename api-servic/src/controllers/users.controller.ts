import {
  UsersMeInfo,
  UsersInfo,
} from "kisszaya-table-reservation/lib/contracts";
import { Controller, Get, Logger, Query, UseGuards } from "@nestjs/common";

import { BrokerService } from "@/broker";
import { JWTAuthGuard, UserId } from "@/guards";
import { InternalException } from "@/exceptions";

@Controller("users")
export class UsersController {
  private readonly logger = new Logger(UsersController.name);

  constructor(private readonly brokerService: BrokerService) {}

  @UseGuards(JWTAuthGuard)
  @Get("me")
  async meInfo(@UserId() user_id: number) {
    this.logger.log("start /api/users/me");

    try {
      return await this.brokerService.publish<
        UsersMeInfo.Request,
        UsersMeInfo.Response
      >(UsersMeInfo.topic, { user_id });
    } catch (e) {
      throw new InternalException(e);
    }
  }

  @UseGuards(JWTAuthGuard)
  @Get("")
  async userInfo(@UserId() user_id: number, @Query("email") email: string) {
    this.logger.log("start /api/users?email");

    try {
      return await this.brokerService.publish<
        UsersInfo.Request,
        UsersInfo.Response
      >(UsersInfo.topic, { email });
    } catch (e) {
      throw new InternalException(e);
    }
  }
}
