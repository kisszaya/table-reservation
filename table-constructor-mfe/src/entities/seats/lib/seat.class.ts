import { ISeat, SEAT_POSITION_VARIANT, SEAT_VARIANT } from "shared/types";

export class Seat implements ISeat {
  id?: number;
  position: SEAT_POSITION_VARIANT;
  variant: SEAT_VARIANT;

  constructor(props: ISeat) {
    this.variant = props.variant;
    this.position = props.position;
    this.id = props.id;
  }
}
