import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { RestaurantModel } from "@/models";
import { RestaurantsService } from "@/restaurants/restaurants.service";
import { RestaurantsController } from "@/restaurants/restaurants.controller";
import { RestaurantRepository } from "@/repositories";
import { EmployeeModule } from "@/employee/employee.module";

@Module({
  imports: [TypeOrmModule.forFeature([RestaurantModel]), EmployeeModule],
  providers: [RestaurantRepository, RestaurantsService],
  controllers: [RestaurantsController],
})
export class RestaurantsModule {}
