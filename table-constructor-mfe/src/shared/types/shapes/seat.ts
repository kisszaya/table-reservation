import { SEAT_POSITION_VARIANT, SEAT_VARIANT } from ".";

export type ISeat = {
  variant: SEAT_VARIANT;
  position: SEAT_POSITION_VARIANT;
  id?: number;
};
