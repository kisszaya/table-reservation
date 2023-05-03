import { combine } from "effector";
import { SEAT_POSITION_VARIANT } from "kisszaya-table-reservation/lib/interfaces";

import { $seatPositionId } from "./seat-position-id";
import { $seatVariant } from "./seat-variant";
import { $seatPosition } from "./seat-position";
import { ISeat } from "../../types";

const $tableSeatFields = combine(
  $seatVariant,
  $seatPosition,
  $seatPositionId,
  (seatVariant, seatPosition, seatPositionId) => {
    const seat: ISeat = {
      position: seatPosition || SEAT_POSITION_VARIANT.TOP_LEFT,
      variant: seatVariant,
      position_id: seatPositionId || -1,
    };

    return seat;
  }
);

export { $tableSeatFields };
