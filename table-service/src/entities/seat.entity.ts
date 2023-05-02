import {
  ISeat,
  SEAT_POSITION_VARIANT,
  SEAT_VARIANT,
} from "kisszaya-table-reservation/lib/interfaces";

export class SeatEntity implements ISeat {
  position: SEAT_POSITION_VARIANT;
  position_id: number;
  seat_id?: number;
  table_id: number;
  variant: SEAT_VARIANT;

  constructor(seat: ISeat) {
    this.position = seat.position;
    this.seat_id = seat.seat_id;
    this.variant = seat.variant;
    this.table_id = seat.table_id;
    this.position_id = seat.position_id;
  }
}
