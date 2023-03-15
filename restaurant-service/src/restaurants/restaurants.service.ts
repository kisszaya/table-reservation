import { Injectable, Logger } from "@nestjs/common";
import { RestaurantsCreate } from "kisszaya-table-reservation/lib/contracts";

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
}
