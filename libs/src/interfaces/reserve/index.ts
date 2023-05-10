import { ITablePreview } from "../table";

export interface IReserve {
  reserve_id?: number;
  day: number;
  month: number;
  year: number;
  time: number;
  user_id: number;
  table_id: number;
  status: RESERVE_STATUS;
  persons_count: number;
  source: RESERVE_SOURCE;
}

export interface IVisitorReservePreview {
  reserve_id: number;
  persons_count: number;
  time: string;
  restaurant_name: string;
  restaurant_address: string;
  table: ITablePreview;
  status: RESERVE_STATUS;
}

export enum RESERVE_STATUS {
  CREATED = "created",
  CLOSED = "closed",
  CANCELED = "canceled",
  ACTIVE = "active",
}

export enum RESERVE_SOURCE {
  WALKED_IN = "walked_in",
  PHONE = "phone",
  TELEGRAM = "telegram",
}
