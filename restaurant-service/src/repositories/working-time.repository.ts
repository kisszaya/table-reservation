import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { WorkingTimeModel } from "@/models";
import { WorkingTimeEntity } from "@/entities";
import { WEEKDAY } from "kisszaya-table-reservation/lib/interfaces";

@Injectable()
export class WorkingTimeRepository {
  private readonly logger = new Logger(WorkingTimeRepository.name);

  constructor(
    @InjectRepository(WorkingTimeModel)
    private readonly workingTimeModel: Repository<WorkingTimeModel>
  ) {}

  public async createWorkingTime(workingTime: WorkingTimeEntity) {
    this.logger.log("create new working-time");

    const newWorkingTime = this.workingTimeModel.create(workingTime);

    await this.workingTimeModel.save(newWorkingTime);
    return newWorkingTime;
  }

  public async findWorkingTimeById(working_time_id: number) {
    this.logger.log("find working-time by id");

    return this.workingTimeModel.findOneBy({ working_time_id });
  }

  public async findWorkingTimeByTimeFromTimeToWeekday(
    time_from: number,
    time_to: number,
    weekday: WEEKDAY
  ) {
    this.logger.log("find working-time by time_from, time_to, weekday");

    return this.workingTimeModel.findOneBy({ time_to, time_from, weekday });
  }

  public async deleteWorkingTimeById(working_time_id: number) {
    this.logger.log("delete working-time by id");

    return this.workingTimeModel.delete({ working_time_id });
  }
}
