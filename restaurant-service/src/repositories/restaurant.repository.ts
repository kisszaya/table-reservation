import { IRestaurant } from "kisszaya-table-reservation/lib/interfaces/restaurant";
import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { RestaurantModel } from "@/models";

@Injectable()
export class RestaurantRepository {
  private readonly logger = new Logger(RestaurantRepository.name);

  constructor(
    @InjectRepository(RestaurantModel)
    private readonly restaurantModel: Repository<RestaurantModel>
  ) {}

  public async createRestaurant(restaurant: IRestaurant) {
    this.logger.log("create new restaurant");

    const newRestaurant = this.restaurantModel.create(restaurant);

    await this.restaurantModel.save(newRestaurant);
    return newRestaurant;
  }

  public async findRestaurantById(restaurant_id: number) {
    this.logger.log("find restaurant by id");

    return this.restaurantModel.findOneBy({ restaurant_id });
  }

  public async deleteRestaurantById(restaurant_id: number) {
    this.logger.log("delete restaurant by id");

    return this.restaurantModel.delete({ restaurant_id });
  }
}
