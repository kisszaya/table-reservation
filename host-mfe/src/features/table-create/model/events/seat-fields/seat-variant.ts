import { createEvent } from "effector";
import { SEAT_VARIANT } from "kisszaya-table-reservation/lib/interfaces";

const changeSeatVariant = createEvent<SEAT_VARIANT>();

export { changeSeatVariant };
