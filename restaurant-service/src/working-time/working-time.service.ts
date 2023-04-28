import { Injectable, Logger } from "@nestjs/common";
import { WorkingTimeRepository } from "@/repositories";
import {
  WorkingTimeChange,
  WorkingTimeDelete,
  WorkingTimeGet,
} from "kisszaya-table-reservation/lib/contracts";
import { BrokerService } from "@/broker";

@Injectable()
export class WorkingTimeService {
  private readonly logger = new Logger(WorkingTimeService.name);

  constructor(
    private readonly workingTimeRepository: WorkingTimeRepository,
    private readonly brokerService: BrokerService
  ) {}

  public async changeWorkingTime(
    data: WorkingTimeChange.Request
  ): Promise<WorkingTimeChange.Response> {
    return { workingTime: {} };
  }

  public async getWorkingTime(
    data: WorkingTimeGet.Request
  ): Promise<WorkingTimeGet.Response> {
    return { workingTime: {} };
  }

  public async deleteWorkingTime(
    data: WorkingTimeDelete.Request
  ): Promise<WorkingTimeDelete.Response> {
    return { weekday: data.weekday };
  }
}
