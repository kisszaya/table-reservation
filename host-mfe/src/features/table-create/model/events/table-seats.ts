import { createEvent } from "effector";
import { SEAT_POSITION_VARIANT } from "kisszaya-table-reservation/lib/interfaces";

const addTableSeat = createEvent();

const removeTableSeat = createEvent<{
  position: SEAT_POSITION_VARIANT;
  position_id?: number;
}>();

export { addTableSeat, removeTableSeat };
