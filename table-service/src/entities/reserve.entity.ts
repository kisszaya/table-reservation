import {
  IReserve,
  RESERVE_SOURCE,
  RESERVE_STATUS,
} from "kisszaya-table-reservation/lib/interfaces";

export class ReserveEntity implements IReserve {
  reserve_id?: number;
  day: number;
  month: number;
  persons_count: number;
  source: RESERVE_SOURCE;
  status: RESERVE_STATUS;
  table_id: number;
  time: number;
  user_id: number;
  year: number;

  constructor(reserve: IReserve) {
    this.day = reserve.day;
    this.reserve_id = reserve.reserve_id;
    this.month = reserve.month;
    this.persons_count = reserve.persons_count;
    this.source = reserve.source;
    this.status = reserve.status;
    this.table_id = reserve.table_id;
    this.time = reserve.time;
    this.user_id = reserve.user_id;
    this.year = reserve.year;
  }
}
