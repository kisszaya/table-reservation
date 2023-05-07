import {
  AggregatorRestaurantsGet,
  AggregatorRestaurantsGetById,
  RestaurantsChange,
  RestaurantsGetById,
  RestaurantsGetUser,
} from "kisszaya-table-reservation/lib/contracts";
import {
  Body,
  Controller,
  Get,
  Logger,
  Param,
  Patch,
  Query,
  UseGuards,
} from "@nestjs/common";

import { BrokerService } from "@/broker";
import { InternalException } from "@/exceptions";

@Controller("aggregator-restaurants")
export class AggregatorRestaurantsController {
  private readonly logger = new Logger(AggregatorRestaurantsController.name);

  constructor(private readonly brokerService: BrokerService) {}

  @Get("?")
  async get(
    @Query("tags") tags?: string,
    @Query("search") search?: string,
    @Query("opened") opened?: string
  ) {
    this.logger.log("GET /api/aggregator-restaurants");

    console.log("tags", tags);
    console.log("search", search);
    console.log("opened", opened);

    try {
      return await this.brokerService.publish<
        AggregatorRestaurantsGet.Request,
        AggregatorRestaurantsGet.Response
      >(AggregatorRestaurantsGet.topic, {
        tags: tags && tags.split(","),
        search,
        opened: opened && Boolean(opened),
      });
    } catch (e) {
      throw new InternalException(e);
    }
  }

  @Get("/:restaurantId")
  async getById(@Param("restaurantId") restaurant_id: string) {
    this.logger.log("GET /api/aggregator-restaurants/:id");

    try {
      return await this.brokerService.publish<
        AggregatorRestaurantsGetById.Request,
        AggregatorRestaurantsGetById.Response
      >(AggregatorRestaurantsGetById.topic, {
        restaurant_id: Number(restaurant_id),
      });
    } catch (e) {
      throw new InternalException(e);
    }
  }
}
