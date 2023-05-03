import { createEvent } from "effector";
import { SEAT_POSITION_VARIANT } from "kisszaya-table-reservation/lib/interfaces";

const changeSeatPosition = createEvent<SEAT_POSITION_VARIANT>();

export { changeSeatPosition };
