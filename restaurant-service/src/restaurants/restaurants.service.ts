import { Injectable, Logger } from "@nestjs/common";
import {
  AggregatorRestaurantsGet,
  AggregatorRestaurantsGetById,
  RestaurantsChange,
  RestaurantsCreate,
  RestaurantsGetById,
  RestaurantsGetUser,
  TagsGetRestaurant,
} from "kisszaya-table-reservation/lib/contracts";

import { RestaurantRepository } from "@/repositories";
import { RestaurantEntity } from "@/entities";
import { EmployeeService } from "@/employee/employee.service";
import { USER_ROLE } from "kisszaya-table-reservation/lib/interfaces";
import {
  RestaurantBlockedForUserException,
  RestaurantNotFoundException,
  RestaurantNotFoundForUserException,
} from "@/exceptions";
import { WorkingTimeService } from "@/working-time/working-time.service";
import { BrokerService } from "@/broker";

@Injectable()
export class RestaurantsService {
  private readonly logger = new Logger(RestaurantsService.name);

  constructor(
    private readonly restaurantRepository: RestaurantRepository,
    private readonly employeeService: EmployeeService,
    private readonly workingTimeService: WorkingTimeService,
    private readonly brokerService: BrokerService
  ) {}

  public async create(
    data: RestaurantsCreate.Request
  ): Promise<RestaurantsCreate.Response> {
    this.logger.log("create");
    const { user_id, ...restaurantData } = data;

    const restaurantEntity = new RestaurantEntity(restaurantData);

    const { restaurant_id, name, city, address, photos } =
      await this.restaurantRepository.createRestaurant(restaurantEntity);

    const { roles } = await this.employeeService.create({
      user_id,
      restaurant_id,
      roles: [USER_ROLE.ADMINISTRATOR],
    });

    return {
      restaurant_id,
      roles,
      photos,
      address,
      city,
      name,
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

  public async change(
    data: RestaurantsChange.Request
  ): Promise<RestaurantsChange.Response> {
    this.logger.log("change");
    const { restaurant_id, user_id, restaurant } = data;

    const employeeRecord = await this.employeeService.findRecord(
      restaurant_id,
      user_id
    );

    if (!employeeRecord) {
      throw new RestaurantNotFoundForUserException();
    }

    if (employeeRecord.roles.includes(USER_ROLE.BLOCKED)) {
      throw new RestaurantBlockedForUserException();
    }

    await this.restaurantRepository.updateRestaurant(restaurant_id, restaurant);

    const updatedRestaurant =
      await this.restaurantRepository.findRestaurantById(restaurant_id);

    return {
      restaurant_id,
      roles: employeeRecord.roles,
      photos: updatedRestaurant.photos,
      address: updatedRestaurant.address,
      city: updatedRestaurant.city,
      name: updatedRestaurant.name,
    };
  }

  public async getById(
    data: RestaurantsGetById.Request
  ): Promise<RestaurantsGetById.Response> {
    this.logger.log("get-by-id");
    const { restaurant_id, user_id } = data;

    const employeeRecord = await this.employeeService.findRecord(
      restaurant_id,
      user_id
    );

    if (!employeeRecord) {
      throw new RestaurantNotFoundForUserException();
    }

    if (employeeRecord.roles.includes(USER_ROLE.BLOCKED)) {
      throw new RestaurantBlockedForUserException();
    }

    const restaurant = await this.restaurantRepository.findRestaurantById(
      restaurant_id
    );

    if (!restaurant) {
      throw new RestaurantNotFoundException(restaurant_id);
    }

    return {
      restaurant_id,
      roles: employeeRecord.roles,
      photos: restaurant.photos,
      address: restaurant.address,
      city: restaurant.city,
      name: restaurant.name,
    };
  }

  public async aggregatorGet(
    data: AggregatorRestaurantsGet.Request
  ): Promise<AggregatorRestaurantsGet.Response> {
    this.logger.log("aggregator get");

    const { tags, search, opened } = data;

    const restaurants = await this.restaurantRepository.getAllRestaurants();

    return {
      restaurants: restaurants.map(({ photos, ...restaurant }) => ({
        ...restaurant,
        opened: true,
        tags: [],
        photo: photos[0],
      })),
    };
  }

  public async aggregatorGetById(
    data: AggregatorRestaurantsGetById.Request
  ): Promise<AggregatorRestaurantsGetById.Response> {
    this.logger.log("aggregator get-by-id");
    const { restaurant_id } = data;

    const restaurant = await this.restaurantRepository.findRestaurantById(
      restaurant_id
    );

    if (!restaurant) {
      throw new RestaurantNotFoundException(restaurant_id);
    }

    const { workingTime } = await this.workingTimeService.getWorkingTime({
      restaurant_id,
      user_id: 0,
    });

    const { tags } = await this.brokerService.publish<
      TagsGetRestaurant.Request,
      TagsGetRestaurant.Response
    >(TagsGetRestaurant.topic, {
      restaurant_id,
    });

    return {
      restaurant: {
        restaurant_id: restaurant.restaurant_id,
        name: restaurant.name,
        city: restaurant.city,
        address: restaurant.address,
        photos: restaurant.photos,
        phone: restaurant.phone,
        tags,
        workingTime,
      },
    };
  }
}
