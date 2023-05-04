import { createEvent } from "effector";
import { SEAT_POSITION_VARIANT } from "kisszaya-table-reservation/lib/interfaces";
import { ISeat } from "../types";

const addTableSeat = createEvent<ISeat>();

const removeTableSeat = createEvent<{
  position: SEAT_POSITION_VARIANT;
  position_id?: number;
}>();

export { addTableSeat, removeTableSeat };
