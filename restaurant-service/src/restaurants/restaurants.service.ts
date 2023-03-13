import { Injectable, Logger } from "@nestjs/common";
import { RestaurantsCreate } from "kisszaya-table-reservation/lib/contracts";

import { RestaurantRepository } from "@/repositories";
import { RestaurantEntity } from "@/entities";

@Injectable()
export class RestaurantsService {
  private readonly logger = new Logger(RestaurantsService.name);

  constructor(private readonly restaurantRepository: RestaurantRepository) {}

  public async create(
    data: RestaurantsCreate.Request
  ): Promise<RestaurantsCreate.Response> {
    this.logger.log("create");

    const restaurantEntity = new RestaurantEntity(data);

    await this.restaurantRepository.createRestaurant(restaurantEntity);

    return {
      status: "success",
    };
  }
}
