import {
  RestaurantsCreate,
  RestaurantsGetUser,
  RestaurantsGetById,
  RestaurantsChange,
} from "kisszaya-table-reservation/lib/contracts";
import {
  Body,
  Controller,
  Get,
  Logger,
  Param,
  Patch,
  Post,
  UseGuards,
} from "@nestjs/common";

import { BrokerService } from "@/broker";
import { JWTAuthGuard, UserId } from "@/guards";
import { InternalException } from "@/exceptions";
import { RestaurantChangeDto, RestaurantCreateDto } from "@/dtos";

@Controller("restaurants")
export class RestaurantsController {
  private readonly logger = new Logger(RestaurantsController.name);

  constructor(private readonly brokerService: BrokerService) {}

  @UseGuards(JWTAuthGuard)
  @Post("")
  async create(@UserId() user_id: number, @Body() dto: RestaurantCreateDto) {
    this.logger.log("POST /api/restaurants");

    try {
      const res = await this.brokerService.publish<
        RestaurantsCreate.Request,
        RestaurantsCreate.Response
      >(RestaurantsCreate.topic, { ...dto, user_id });
      console.log("res", res);
      return res;
    } catch (e) {
      console.log("err", e);
      throw new InternalException(e);
    }
  }

  @UseGuards(JWTAuthGuard)
  @Patch("/:restaurantId")
  async changeRestaurantInfo(
    @UserId() user_id: number,
    @Param("restaurantId") restaurant_id: string,
    @Body() dto: RestaurantChangeDto
  ) {
    this.logger.log("Patch /api/restaurants/:restaurantId");

    try {
      const res = await this.brokerService.publish<
        RestaurantsChange.Request,
        RestaurantsChange.Response
      >(RestaurantsChange.topic, {
        restaurant: dto,
        user_id,
        restaurant_id: Number(restaurant_id),
      });
      console.log("res", res);
      return res;
    } catch (e) {
      console.log("err", e);
      throw new InternalException(e);
    }
  }

  @UseGuards(JWTAuthGuard)
  @Get("me")
  async getMe(@UserId() user_id: number) {
    this.logger.log("GET /api/restaurants/me");

    try {
      return await this.brokerService.publish<
        RestaurantsGetUser.Request,
        RestaurantsGetUser.Response
      >(RestaurantsGetUser.topic, { user_id });
    } catch (e) {
      throw new InternalException(e);
    }
  }

  @UseGuards(JWTAuthGuard)
  @Get("/:restaurantId")
  async getById(
    @Param("restaurantId") restaurant_id: string,
    @UserId() user_id: number
  ) {
    this.logger.log("GET /api/restaurants/:id");

    try {
      return await this.brokerService.publish<
        RestaurantsGetById.Request,
        RestaurantsGetById.Response
      >(RestaurantsGetById.topic, {
        user_id,
        restaurant_id: Number(restaurant_id),
      });
    } catch (e) {
      throw new InternalException(e);
    }
  }
}
