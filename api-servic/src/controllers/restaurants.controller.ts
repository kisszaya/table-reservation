import {
  RestaurantsCreate,
  RestaurantsGetUser,
  RestaurantsGetById,
  EmployeesGetRestaurant,
  EmployeesAdd,
  EmployeesDelete,
} from "kisszaya-table-reservation/lib/contracts";
import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Post,
  UseGuards,
} from "@nestjs/common";

import { BrokerService } from "@/broker";
import { JWTAuthGuard, UserId } from "@/guards";
import { InternalException } from "@/exceptions";
import { RestaurantCreateDto, RestaurantEmployeeAddDto } from "@/dtos";

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

  @UseGuards(JWTAuthGuard)
  @Get("/:restaurantId/employees")
  async getRestaurantEmployees(
    @Param("restaurantId") restaurant_id: string,
    @UserId() user_id: number
  ) {
    this.logger.log(`GET /api/restaurants/${restaurant_id}/employees`);

    try {
      return await this.brokerService.publish<
        EmployeesGetRestaurant.Request,
        EmployeesGetRestaurant.Response
      >(EmployeesGetRestaurant.topic, {
        user_id,
        restaurant_id: Number(user_id),
      });
    } catch (e) {
      throw new InternalException(e);
    }
  }

  @UseGuards(JWTAuthGuard)
  @Post("/:restaurantId/employees")
  async addRestaurantEmployee(
    @Param("restaurantId") restaurant_id: string,
    @UserId() user_id: number,
    @Body() dto: RestaurantEmployeeAddDto
  ) {
    this.logger.log(`POST /api/restaurants/${restaurant_id}/employees`);

    try {
      return await this.brokerService.publish<
        EmployeesAdd.Request,
        EmployeesAdd.Response
      >(EmployeesAdd.topic, {
        user_id,
        restaurant_id: Number(restaurant_id),
        ...dto,
      });
    } catch (e) {
      throw new InternalException(e);
    }
  }

  @UseGuards(JWTAuthGuard)
  @Delete("/:restaurantId/employees/:employeeId")
  async deleteRestaurantEmployee(
    @Param("restaurantId") restaurant_id: string,
    @Param("employeeId") employee_id: string,
    @UserId() user_id: number
  ) {
    this.logger.log(
      `DELETE /api/restaurants/${restaurant_id}/employees/${employee_id}`
    );

    try {
      return await this.brokerService.publish<
        EmployeesDelete.Request,
        EmployeesDelete.Response
      >(EmployeesDelete.topic, {
        user_id,
        restaurant_id: Number(restaurant_id),
        employee_id: Number(employee_id),
      });
    } catch (e) {
      throw new InternalException(e);
    }
  }
}
