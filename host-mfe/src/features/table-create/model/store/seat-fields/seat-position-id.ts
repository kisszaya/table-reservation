import { createStore } from "effector";

import { changeSeatPositionId } from "../../events/seat-fields/seat-position-id";
import { resetSeat } from "../../events/reset";

const $seatPositionId = createStore<number | null>(null);

$seatPositionId.on(changeSeatPositionId, (_, payload) => payload);
$seatPositionId.reset(resetSeat);

export { $seatPositionId };
