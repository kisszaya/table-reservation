import { SEAT_POSITION_VARIANT, SEAT_VARIANT } from ".";

export type ISeat =
  | {
      variant: SEAT_VARIANT;
      position:
        | SEAT_POSITION_VARIANT.TOP
        | SEAT_POSITION_VARIANT.BOTTOM
        | SEAT_POSITION_VARIANT.LEFT
        | SEAT_POSITION_VARIANT.RIGHT;
      id: number;
    }
  | {
      variant: SEAT_VARIANT;
      position:
        | SEAT_POSITION_VARIANT.TOP_RIGHT
        | SEAT_POSITION_VARIANT.BOTTOM_LEFT
        | SEAT_POSITION_VARIANT.TOP_LEFT
        | SEAT_POSITION_VARIANT.BOTTOM_RIGHT;
    };
