import { ITableTag } from "kisszaya-table-reservation/lib/interfaces";

export class TableTagEntity implements ITableTag {
  table_id: number;
  table_tag_id?: number;
  tag_id: number;

  constructor(tableTag: ITableTag) {
    this.table_id = tableTag.table_id;
    this.tag_id = tableTag.tag_id;
    this.table_tag_id = tableTag.table_tag_id;
  }
}
