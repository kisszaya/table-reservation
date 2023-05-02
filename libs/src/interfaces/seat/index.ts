export interface ISeat {
  seat_id?: number;
  table_id: number;
  variant: SEAT_VARIANT;
  position: SEAT_POSITION_VARIANT;
  position_id: number;
}

export enum SEAT_VARIANT {
  ARMCHAIR = "ARMCHAIR",
  CHAR = "CHAR",
}

export enum SEAT_POSITION_VARIANT {
  TOP_LEFT = "TOP_LEFT",
  TOP_RIGHT = "TOP_RIGHT",
  BOTTOM_LEFT = "BOTTOM_LEFT",
  BOTTOM_RIGHT = "BOTTOM_RIGHT",
  TOP = "TOP",
  LEFT = "LEFT",
  BOTTOM = "BOTTOM",
  RIGHT = "RIGHT",
}
