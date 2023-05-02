import { ITag } from "kisszaya-table-reservation/lib/interfaces";

export class TagEntity implements ITag {
  tag_id?: number;
  text: string;

  constructor(tag: ITag) {
    this.tag_id = tag.tag_id;
    this.text = tag.text;
  }
}
