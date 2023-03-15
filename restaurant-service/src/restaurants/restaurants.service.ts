import { Injectable, Logger } from "@nestjs/common";
import {
  RestaurantsCreate,
  RestaurantsGetUser,
} from "kisszaya-table-reservation/lib/contracts";

import { RestaurantRepository } from "@/repositories";
import { RestaurantEntity } from "@/entities";
import { EmployeeService } from "@/employee/employee.service";
import { USER_ROLE } from "kisszaya-table-reservation/lib/interfaces";

@Injectable()
export class RestaurantsService {
  private readonly logger = new Logger(RestaurantsService.name);

  constructor(
    private readonly restaurantRepository: RestaurantRepository,
    private readonly employeeService: EmployeeService
  ) {}

  public async create(
    data: RestaurantsCreate.Request
  ): Promise<RestaurantsCreate.Response> {
    this.logger.log("create");
    const { user_id, ...restaurantData } = data;

    const restaurantEntity = new RestaurantEntity(restaurantData);

    const { restaurant_id } = await this.restaurantRepository.createRestaurant(
      restaurantEntity
    );

    await this.employeeService.create({
      user_id,
      restaurant_id,
      roles: [USER_ROLE.ADMINISTRATOR],
    });

    return {
      status: "success",
    };
  }

  public async getMe(user_id: number): Promise<RestaurantsGetUser.Response> {
    this.logger.log("getMe");

    const { restaurants: restaurantRecords } =
      await this.employeeService.getUserRestaurantIds(user_id);

    const restaurants = await Promise.all(
      restaurantRecords.map(async (el) => {
        const restaurant = await this.restaurantRepository.findRestaurantById(
          el.restaurant_id
        );
        return {
          restaurant_id: el.restaurant_id,
          name: restaurant.name,
          roles: el.roles,
          photos: restaurant.photos,
          address: restaurant.address,
          city: restaurant.city,
        };
      })
    );

    return { restaurants };
  }
}
