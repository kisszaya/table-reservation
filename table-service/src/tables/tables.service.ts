import { Injectable, Logger } from "@nestjs/common";

import { TableRepository } from "@/repositories";
import { BrokerService } from "@/broker";

@Injectable()
export class TablesService {
  private readonly logger = new Logger(TablesService.name);

  constructor(
    private readonly tableRepository: TableRepository,
    private readonly brokerService: BrokerService
  ) {}

  // public async changeWorkingTime(
  //   data: WorkingTimeChange.Request
  // ): Promise<WorkingTimeChange.Response> {
  //   this.logger.log("changeWorkingTime");
  //
  //   const { restaurant_id, workingTime } = data;
  //
  //   await this.restaurantWorkingTimeRepository.deleteRestaurantWorkingTimeById(
  //     restaurant_id
  //   );
  //
  //   for (const time of Object.values(workingTime)) {
  //     let workingTime =
  //       await this.workingTimeRepository.findWorkingTimeByTimeFromTimeToWeekday(
  //         time.time_from,
  //         time.time_to,
  //         time.weekday
  //       );
  //
  //     if (!workingTime) {
  //       const workingTimeEntity = new WorkingTimeEntity({
  //         time_to: time.time_to,
  //         weekday: time.weekday,
  //         time_from: time.time_from,
  //       });
  //       workingTime = await this.workingTimeRepository.createWorkingTime(
  //         workingTimeEntity
  //       );
  //     }
  //
  //     const restaurantWorkingTimeEntity = new RestaurantWorkingTimeEntity({
  //       restaurant_id,
  //       working_time_id: workingTime.working_time_id,
  //     });
  //
  //     await this.restaurantWorkingTimeRepository.createRestaurantWorkingTime(
  //       restaurantWorkingTimeEntity
  //     );
  //   }
  //
  //   return { workingTime };
  // }
  //
  // public async getWorkingTime(
  //   data: WorkingTimeGet.Request
  // ): Promise<WorkingTimeGet.Response> {
  //   this.logger.log("getWorkingTime");
  //
  //   const { restaurant_id } = data;
  //
  //   const restaurantWorkingTimes =
  //     await this.restaurantWorkingTimeRepository.findAllRestaurantWorkingTimeByRestaurantId(
  //       restaurant_id
  //     );
  //
  //   if (restaurantWorkingTimes.length === 0) {
  //     return { workingTime: {} };
  //   }
  //
  //   const res: WorkingTimeGet.Response["workingTime"] = {};
  //
  //   for (const time of restaurantWorkingTimes) {
  //     const workingTime = await this.workingTimeRepository.findWorkingTimeById(
  //       time.working_time_id
  //     );
  //     if (workingTime) {
  //       res[workingTime.weekday] = {
  //         time_from: workingTime.time_from,
  //         time_to: workingTime.time_to,
  //         weekday: workingTime.weekday,
  //       };
  //     }
  //   }
  //
  //   return { workingTime: res };
  // }
}
