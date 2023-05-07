import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { RestaurantModel } from "@/models";
import { RestaurantEntity } from "@/entities";

@Injectable()
export class RestaurantRepository {
  private readonly logger = new Logger(RestaurantRepository.name);

  constructor(
    @InjectRepository(RestaurantModel)
    private readonly restaurantModel: Repository<RestaurantModel>
  ) {}

  public async createRestaurant(restaurant: RestaurantEntity) {
    this.logger.log("create new restaurants");

    const newRestaurant = this.restaurantModel.create(restaurant);

    await this.restaurantModel.save(newRestaurant);
    return newRestaurant;
  }

  public async updateRestaurant(
    restaurant_id: number,
    restaurant: {
      name?: string;
      city?: string;
      address?: string;
      photos?: string[];
    }
  ) {
    this.logger.log("updateRestaurant");

    const res = await this.restaurantModel.update(
      {
        restaurant_id,
      },
      restaurant
    );
    console.log("TEST updateRestaurant", res);
  }

  public async findRestaurantById(restaurant_id: number) {
    this.logger.log("find restaurants by id");

    return this.restaurantModel.findOneBy({ restaurant_id });
  }

  public async getAllRestaurants() {
    this.logger.log("find all restaurants");

    return this.restaurantModel.find();
  }

  public async deleteRestaurantById(restaurant_id: number) {
    this.logger.log("delete restaurants by id");

    return this.restaurantModel.delete({ restaurant_id });
  }
}
