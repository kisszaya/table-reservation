import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { RestaurantWorkingTimeModel } from "@/models";
import { RestaurantWorkingTimeEntity } from "@/entities";

@Injectable()
export class RestaurantWorkingTimeRepository {
  private readonly logger = new Logger(RestaurantWorkingTimeRepository.name);

  constructor(
    @InjectRepository(RestaurantWorkingTimeModel)
    private readonly restaurantWorkingTimeModel: Repository<RestaurantWorkingTimeModel>
  ) {}

  public async createRestaurantWorkingTime(
    restaurantWorkingTime: RestaurantWorkingTimeEntity
  ) {
    this.logger.log("create new restaurant-working-time");

    const newRestaurantWorkingTime = this.restaurantWorkingTimeModel.create(
      restaurantWorkingTime
    );

    await this.restaurantWorkingTimeModel.save(newRestaurantWorkingTime);
    return newRestaurantWorkingTime;
  }

  public async findRestaurantWorkingTimeById(
    restaurant_working_time_id: number
  ) {
    this.logger.log("find restaurant-working-time by id");

    return this.restaurantWorkingTimeModel.findOneBy({
      restaurant_working_time_id,
    });
  }

  public async findAllRestaurantWorkingTimeByRestaurantId(
    restaurant_id: number
  ) {
    this.logger.log("find restaurant-working-time by restaurant_id");

    return this.restaurantWorkingTimeModel.findBy({
      restaurant_id,
    });
  }

  public async deleteRestaurantWorkingTimeById(restaurant_id: number) {
    this.logger.log("delete restaurant-working-time by restaurant_id");

    return this.restaurantWorkingTimeModel.delete({
      restaurant_id,
    });
  }
}
