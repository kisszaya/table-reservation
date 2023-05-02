export interface ITable {
  table_id?: number;
  restaurant_id: number;
  persons_count: number;
  variant: TABLE_VARIANT;
  title: string;
  description: string;
}

export enum TABLE_VARIANT {
  ROUND = "ROUND",
  SQUARE = "SQUARE",
}
