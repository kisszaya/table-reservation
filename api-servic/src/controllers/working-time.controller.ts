import {
  WorkingTimeGet,
  WorkingTimeChange,
} from "kisszaya-table-reservation/lib/contracts";
import {
  Body,
  Controller,
  Get,
  Logger,
  Param,
  Put,
  UseGuards,
} from "@nestjs/common";

import { BrokerService } from "@/broker";
import { JWTAuthGuard, UserId } from "@/guards";
import { InternalException } from "@/exceptions";
import { WorkingTimeChangeDto } from "@/dtos";

@Controller("restaurants")
export class WorkingTimeController {
  private readonly logger = new Logger(WorkingTimeController.name);

  constructor(private readonly brokerService: BrokerService) {}

  @UseGuards(JWTAuthGuard)
  @Get("/:restaurantId/working-time")
  async getRestaurantWorkingTime(
    @Param("restaurantId") restaurant_id: string,
    @UserId() user_id: number
  ) {
    this.logger.log(`GET /api/restaurants/:restaurantId/working-time`);

    try {
      return await this.brokerService.publish<
        WorkingTimeGet.Request,
        WorkingTimeGet.Response
      >(WorkingTimeGet.topic, {
        user_id,
        restaurant_id: Number(restaurant_id),
      });
    } catch (e) {
      throw new InternalException(e);
    }
  }

  @UseGuards(JWTAuthGuard)
  @Put("/:restaurantId/working-time")
  async changeRestaurantWorkingTime(
    @Param("restaurantId") restaurant_id: string,
    @UserId() user_id: number,
    @Body() dto: WorkingTimeChangeDto
  ) {
    this.logger.log(`PUT /api/restaurants/:restaurantId/working-time`);
    console.log("TEST meow");

    try {
      return await this.brokerService.publish<
        WorkingTimeChange.Request,
        WorkingTimeChange.Response
      >(WorkingTimeChange.topic, {
        user_id,
        restaurant_id: Number(restaurant_id),
        ...dto,
      });
    } catch (e) {
      throw new InternalException(e);
    }
  }
}
