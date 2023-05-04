import { createStore } from "effector";

import { addTableSeat, removeTableSeat } from "../events/table-seats";
import { resetTable } from "../events/reset";
import { ISeat } from "../types";

const $tableSeats = createStore<ISeat[]>([]);
$tableSeats.reset(resetTable);

/***
 * Add seat
 ***/
$tableSeats.on(addTableSeat, (state, payload) => {
  return [...state, payload];
});

/***
 * Remove seat
 ***/

$tableSeats.on(removeTableSeat, (state, payload) => {
  return state.filter(
    (seat) =>
      seat.position !== payload.position &&
      seat.position_id !== payload.position_id
  );
});

export { $tableSeats };
