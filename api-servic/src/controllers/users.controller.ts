import {
  UsersLogin,
  UsersRegister,
} from "kisszaya-table-reservation/lib/contracts";
import {
  Body,
  Controller,
  Logger,
  Post,
  UnauthorizedException,
} from "@nestjs/common";

import { BrokerService } from "@/broker";
import { UserLoginDto, UserRegisterDto } from "@/dtos";

@Controller("users")
export class UsersController {
  private readonly logger = new Logger(UsersController.name);

  constructor(private readonly brokerService: BrokerService) {}

  @Post("login")
  async login(@Body() dto: UserLoginDto) {
    this.logger.log("start /api/users/login");
    try {
      return await this.brokerService.publish<
        UsersLogin.Request,
        UsersLogin.Response
      >(UsersLogin.topic, dto);
    } catch (e) {
      if (e instanceof Error) {
        this.logger.error(e)
        throw new UnauthorizedException(e);
      }
    }
  }

  @Post("register")
  async register(@Body() dto: UserRegisterDto) {
    this.logger.log("start /api/users/register");
    try {
      return await this.brokerService.publish<
        UsersRegister.Request,
        UsersRegister.Response
      >(UsersRegister.topic, dto);
    } catch (e) {
      if (e instanceof Error) {
        this.logger.error(e)
        throw new UnauthorizedException(e);
      }
    }
  }
}
