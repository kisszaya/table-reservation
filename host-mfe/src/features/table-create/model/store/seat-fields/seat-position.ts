import { createStore } from "effector";
import { SEAT_POSITION_VARIANT } from "kisszaya-table-reservation/lib/interfaces";

import { changeSeatPosition } from "../../events/seat-fields/seat-position";
import { resetSeat } from "../../events/reset";

const $seatPosition = createStore<SEAT_POSITION_VARIANT | null>(null);

$seatPosition.on(changeSeatPosition, (_, payload) => payload);
$seatPosition.reset(resetSeat);

export { $seatPosition };
