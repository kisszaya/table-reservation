import { ISeat, ITable, SEAT_VARIANT, TABLE_VARIANT } from "../types";

export const DEFAULT_SHAPE_CONSTRUCTOR: {
  TABLE: ITable;
  SEAT: Pick<ISeat, "variant">;
  HEIGHT_UNIT: number;
  WIDTH_UNIT: number;
  TABLE_INDENT: number;
  PLUS_SIZE: number;
} = {
  TABLE: {
    height: 1,
    variant: TABLE_VARIANT.SQUARE,
    width: 2,
  },
  SEAT: {
    variant: SEAT_VARIANT.ARMCHAIR,
  },
  HEIGHT_UNIT: 60,
  WIDTH_UNIT: 60,
  TABLE_INDENT: 10,
  PLUS_SIZE: 15,
};
