import {
  ITable,
  TABLE_VARIANT,
} from "kisszaya-table-reservation/lib/interfaces";

export class TableEntity implements ITable {
  description: string;
  persons_count: number;
  restaurant_id: number;
  table_id?: number;
  title: string;
  variant: TABLE_VARIANT;

  constructor(table: ITable) {
    this.variant = table.variant;
    this.description = table.description;
    this.persons_count = table.persons_count;
    this.table_id = table.table_id;
    this.title = table.title;
    this.restaurant_id = table.restaurant_id;
  }
}
