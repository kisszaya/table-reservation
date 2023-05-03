import {
  TablesGet,
  TablesCreate,
} from "kisszaya-table-reservation/lib/contracts";
import {
  Body,
  Controller,
  Get,
  Logger,
  Param,
  Post,
  UseGuards,
} from "@nestjs/common";

import { BrokerService } from "@/broker";
import { JWTAuthGuard, UserId } from "@/guards";
import { InternalException } from "@/exceptions";
import { CreateTableDto } from "@/dtos";

@Controller("restaurants")
export class TablesController {
  private readonly logger = new Logger(TablesController.name);

  constructor(private readonly brokerService: BrokerService) {}

  @UseGuards(JWTAuthGuard)
  @Get("/:restaurantId/tables")
  async getRestaurantTables(
    @Param("restaurantId") restaurant_id: string,
    @UserId() user_id: number
  ) {
    this.logger.log(`GET /api/restaurants/:restaurantId/tables`);

    try {
      return await this.brokerService.publish<
        TablesGet.Request,
        TablesGet.Response
      >(TablesGet.topic, {
        user_id,
        restaurant_id: Number(user_id),
      });
    } catch (e) {
      throw new InternalException(e);
    }
  }

  @UseGuards(JWTAuthGuard)
  @Post("/:restaurantId/tables")
  async createRestaurantTable(
    @Param("restaurantId") restaurant_id: string,
    @UserId() user_id: number,
    @Body() dto: CreateTableDto
  ) {
    this.logger.log(`POST /api/restaurants/:restaurantId/tables`);

    try {
      return await this.brokerService.publish<
        TablesCreate.Request,
        TablesCreate.Response
      >(TablesCreate.topic, {
        user_id,
        restaurant_id: Number(restaurant_id),
        table: dto,
      });
    } catch (e) {
      throw new InternalException(e);
    }
  }
}
