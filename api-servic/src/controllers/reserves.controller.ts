import {
  ReservesChangeVisitorStatus,
  ReservesCreate,
  ReservesGetVisitor,
} from "kisszaya-table-reservation/lib/contracts";
import {
  Body,
  Controller,
  Get,
  Logger,
  Param,
  Post,
  Res,
  UseGuards,
} from "@nestjs/common";

import { BrokerService } from "@/broker";
import { InternalException } from "@/exceptions";
import { ReserveCreateDto, VisitorReserveChangeStatusDto } from "@/dtos";
import { JWTAuthGuard, UserId } from "@/guards";
import { TokenService } from "@/services";
import { Response } from "express";

@Controller("reserves")
export class ReservesController {
  private readonly logger = new Logger(ReservesController.name);

  constructor(
    private readonly brokerService: BrokerService,
    private readonly tokenService: TokenService
  ) {}

  @Post("restaurants/:restaurantId")
  async createReserve(
    @Param("restaurantId") restaurant_id: string,
    @Body() dto: ReserveCreateDto,
    @Res({ passthrough: true }) response: Response
  ) {
    this.logger.log(`POST /api/reserves/restaurants/:restaurantId`);

    try {
      const { refreshToken, ...data } = await this.brokerService.publish<
        ReservesCreate.Request,
        ReservesCreate.Response
      >(ReservesCreate.topic, {
        ...dto,
        restaurant_id: Number(restaurant_id),
      });

      this.tokenService.setRefreshCookie(response, refreshToken);
      this.tokenService.setAccessCookie(response, data.accessToken);

      return data;
    } catch (e) {
      throw new InternalException(e);
    }
  }

  @UseGuards(JWTAuthGuard)
  @Get("")
  async getVisitorReserves(@UserId() user_id: number) {
    this.logger.log(`GET /api/reserves`);

    try {
      return await this.brokerService.publish<
        ReservesGetVisitor.Request,
        ReservesGetVisitor.Response
      >(ReservesGetVisitor.topic, {
        user_id,
      });
    } catch (e) {
      throw new InternalException(e);
    }
  }

  @Post("/:reserveId")
  async changeVisitorReserveStatus(
    @Param("reserveId") reserve_id: string,
    @Body() dto: VisitorReserveChangeStatusDto
  ) {
    this.logger.log(`POST /api/reserves/:reserveId`);

    try {
      return await this.brokerService.publish<
        ReservesChangeVisitorStatus.Request,
        ReservesChangeVisitorStatus.Response
      >(ReservesChangeVisitorStatus.topic, {
        ...dto,
        reserve_id: Number(reserve_id),
      });
    } catch (e) {
      throw new InternalException(e);
    }
  }
}
