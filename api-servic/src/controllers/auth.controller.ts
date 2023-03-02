import {
  Controller,
  Logger,
  Body,
  UnauthorizedException,
  Post,
} from "@nestjs/common";
import {
  UsersLogin,
  UsersRegister,
} from "kisszaya-table-reservation/lib/contracts";

import { BrokerService } from "@/broker";
import { UserLoginDto, UserRegisterDto } from "@/dtos";

@Controller("auth")
export class AuthController {
  private readonly logger = new Logger(AuthController.name);

  constructor(private readonly brokerService: BrokerService) {}

  @Post("login")
  async login(@Body() dto: UserLoginDto) {
    this.logger.log("start /api/auth/login");
    try {
      return await this.brokerService.publish<
        UsersLogin.Request,
        UsersLogin.Response
      >(UsersLogin.topic, dto);
    } catch (e) {
      if (e instanceof Error) {
        throw new UnauthorizedException(e);
      }
    }
  }

  @Post("register")
  async register(@Body() dto: UserRegisterDto) {
    this.logger.log("start /api/auth/register");
    try {
      return await this.brokerService.publish<
        UsersRegister.Request,
        UsersRegister.Response
      >(UsersRegister.topic, dto);
    } catch (e) {
      if (e instanceof Error) {
        throw new UnauthorizedException(e);
      }
    }
  }
}
