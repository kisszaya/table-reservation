import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { JwtModule } from "@nestjs/jwt";

import { RestaurantModel } from "@/models";
import { RestaurantsService } from "@/restaurants/restaurants.service";
import { RestaurantsController } from "@/restaurants/restaurants.controller";

@Module({
  imports: [
    TypeOrmModule.forFeature([RestaurantModel]),
    JwtModule.register({}),
  ],
  providers: [RestaurantsService],
  controllers: [RestaurantsController],
})
export class RestaurantsModule {}
