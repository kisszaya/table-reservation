import {
  TablesGet,
  TablesCreate,
  TablesDelete,
  TablesGetFree,
} from "kisszaya-table-reservation/lib/contracts";
import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Post,
  Query,
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
        restaurant_id: Number(restaurant_id),
      });
    } catch (e) {
      throw new InternalException(e);
    }
  }

  @Get("/:restaurantId/tables/free")
  async getRestaurantFreeTables(
    @Query("day") day: string,
    @Query("time") time: string,
    @Query("month") month: string,
    @Param("restaurantId") restaurant_id: string
  ) {
    this.logger.log(`GET /api/restaurants/:restaurantId/tables/free`);

    try {
      return await this.brokerService.publish<
        TablesGetFree.Request,
        TablesGetFree.Response
      >(TablesGetFree.topic, {
        restaurant_id: Number(restaurant_id),
        day: Number(day),
        time: Number(time),
        month: Number(month),
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

  @UseGuards(JWTAuthGuard)
  @Delete("/:restaurantId/tables/:tableId")
  async deleteRestaurantTable(
    @Param("restaurantId") restaurant_id: string,
    @Param("tableId") table_id: string,
    @UserId() user_id: number
  ) {
    this.logger.log(`DELETE /api/restaurants/:restaurantId/tables/:tableId`);

    try {
      return await this.brokerService.publish<
        TablesDelete.Request,
        TablesDelete.Response
      >(TablesDelete.topic, {
        user_id,
        restaurant_id: Number(restaurant_id),
        table_id: Number(table_id),
      });
    } catch (e) {
      throw new InternalException(e);
    }
  }
}
