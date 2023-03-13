import { Injectable, Logger } from "@nestjs/common";
import { RestaurantRepository } from "@/repositories";
import { RestaurantsCreate } from "kisszaya-table-reservation/lib/contracts";

@Injectable()
export class RestaurantsService {
  private readonly logger = new Logger(RestaurantsService.name);

  constructor(private readonly restaurantRepository: RestaurantRepository) {}

  public async create(
    data: RestaurantsCreate.Request
  ): Promise<RestaurantsCreate.Response> {
    this.logger.log("create");

    return {
      status: "success",
    };
  }
}
