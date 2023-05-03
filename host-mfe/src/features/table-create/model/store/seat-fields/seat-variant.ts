import { createStore } from "effector";
import { SEAT_VARIANT } from "kisszaya-table-reservation/lib/interfaces";

import { changeSeatVariant } from "../../events/seat-fields/seat-variant";
import { resetSeat } from "../../events/reset";

const $seatVariant = createStore<SEAT_VARIANT>(SEAT_VARIANT.CHAR);

$seatVariant.on(changeSeatVariant, (_, payload) => payload);
$seatVariant.reset(resetSeat);

export { $seatVariant };
