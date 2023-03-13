import {
  IWorkingTime,
  WEEKDAY,
} from "kisszaya-table-reservation/lib/interfaces";

export class WorkingTimeEntity implements IWorkingTime {
  working_time_id?: number;
  time_from: number;
  time_to: number;
  weekday: WEEKDAY;

  constructor(workingTime: IWorkingTime) {
    this.time_from = workingTime.time_from;
    this.time_to = workingTime.time_to;
    this.weekday = workingTime.weekday;
    this.working_time_id = workingTime.working_time_id;
  }
}
