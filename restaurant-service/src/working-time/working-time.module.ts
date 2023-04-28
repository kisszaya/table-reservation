import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { WorkingTimeModel, RestaurantWorkingTimeModel } from "@/models";
import {
  WorkingTimeRepository,
  RestaurantWorkingTimeRepository,
} from "@/repositories";
import { WorkingTimeService } from "./working-time.service";
import { WorkingTimeController } from "./working-time.controller";

@Module({
  imports: [
    TypeOrmModule.forFeature([WorkingTimeModel, RestaurantWorkingTimeModel]),
  ],
  providers: [
    WorkingTimeService,
    WorkingTimeRepository,
    RestaurantWorkingTimeRepository,
  ],
  controllers: [WorkingTimeController],
})
export class WorkingTimeModule {}
