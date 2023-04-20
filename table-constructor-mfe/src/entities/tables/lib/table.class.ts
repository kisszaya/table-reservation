import { ITable, TABLE_VARIANT } from "shared/types";

export class Table implements ITable {
  height: number;
  width: number;
  variant: TABLE_VARIANT;

  constructor(props: ITable) {
    this.height = props.height;
    this.width = props.width;
    this.variant = props.variant;
  }
  set setVariant(variant: TABLE_VARIANT) {
    this.variant = variant;
  }

  set setHeight(height: number) {
    this.height = height;
  }

  public setWidth(width: number) {
    this.width = width;
  }
}
