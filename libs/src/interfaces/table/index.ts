import { ISeat } from "../seat";

export interface ITable {
  table_id?: number;
  restaurant_id: number;
  height: number;
  width: number;
  persons_count: number;
  variant: TABLE_VARIANT;
  title: string;
  description: string;
}

export enum TABLE_VARIANT {
  ROUND = "ROUND",
  SQUARE = "SQUARE",
}

export interface ITablePreview {
  table_id?: number;
  restaurant_id: number;
  persons_count: number;
  height: number;
  width: number;
  variant: TABLE_VARIANT;
  title: string;
  description: string;
  seats: ISeat[];
}
