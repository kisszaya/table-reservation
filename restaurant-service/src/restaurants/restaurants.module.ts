import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { JwtModule } from "@nestjs/jwt";

import { RestaurantModel } from "@/models";
import { RestaurantsService } from "@/restaurants/restaurants.service";
import { RestaurantsController } from "@/restaurants/restaurants.controller";
import { RestaurantRepository } from "@/repositories";
import { EmployeeService } from "@/employee/employee.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([RestaurantModel]),
    JwtModule.register({}),
    RestaurantsService,
  ],
  providers: [RestaurantRepository, EmployeeService],
  controllers: [RestaurantsController],
})
export class RestaurantsModule {}
