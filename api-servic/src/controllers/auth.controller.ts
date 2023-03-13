import { Request, Response } from "express";
import {
  UsersLogin,
  UsersRegister,
  UsersUpdateRefresh,
  UsersLogout,
} from "kisszaya-table-reservation/lib/contracts";
import {
  Body,
  Controller,
  Logger,
  Post,
  Req,
  Res,
  UseGuards,
} from "@nestjs/common";

import { BrokerService } from "@/broker";
import { UpdateTokensDto, UserLoginDto, UserRegisterDto } from "@/dtos";
import { JWTAuthGuard, UserId } from "@/guards";
import { TokenService } from "@/services";
import { InternalException } from "@/exceptions";
import { getRefreshUserId } from "@/utils";

@Controller("auth")
export class AuthController {
  private readonly logger = new Logger(AuthController.name);

  constructor(
    private readonly brokerService: BrokerService,
    private readonly tokenService: TokenService
  ) {}

  @Post("login")
  async login(
    @Body() dto: UserLoginDto,
    @Res({ passthrough: true }) response: Response
  ) {
    this.logger.log("start /api/users/login");

    try {
      const { refreshToken, ...data } = await this.brokerService.publish<
        UsersLogin.Request,
        UsersLogin.Response
      >(UsersLogin.topic, dto);

      this.tokenService.setRefreshCookie(response, refreshToken);
      this.tokenService.setAccessCookie(response, data.accessToken);

      return data;
    } catch (e) {
      if (e instanceof Error) {
        throw new InternalException(e);
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
        throw new InternalException(e);
      }
    }
  }

  @Post("refresh")
  async refresh(
    @Req() request: Request,
    @Body() dto: UpdateTokensDto,
    @Res({ passthrough: true }) response: Response
  ) {
    this.logger.log("start /api/users/refresh");

    const refreshToken = request.cookies["refresh"];
    const user_id = getRefreshUserId(refreshToken);

    const { fingerprint } = dto;

    const message = {
      fingerprint,
      user_id,
      refreshToken,
    };

    try {
      const data = await this.brokerService.publish<
        UsersUpdateRefresh.Request,
        UsersUpdateRefresh.Response
      >(UsersUpdateRefresh.topic, message);

      this.tokenService.setRefreshCookie(response, refreshToken);
      this.tokenService.setAccessCookie(response, data.accessToken);

      return data;
    } catch (e) {
      throw new InternalException(e);
    }
  }

  @UseGuards(JWTAuthGuard)
  @Post("logout")
  async logout(
    @Req() request: Request,
    @UserId() user_id: number,
    @Res({ passthrough: true }) response: Response
  ) {
    const message = {
      user_id,
      refreshToken: request.cookies["refresh"],
    };

    try {
      const data = await this.brokerService.publish<
        UsersLogout.Request,
        UsersLogout.Response
      >(UsersLogout.topic, message);

      this.tokenService.removeRefreshCookie(response);
      this.tokenService.removeAccessCookie(response);

      return data;
    } catch (e) {
      console.log("error", e);
      throw new InternalException(e);
    }
  }
}
