import { createEvent, createStore, sample, forward } from "effector";

import { addTableSeat, removeTableSeat } from "../events/table-seats";
import { resetSeat, resetTable } from "../events/reset";
import { $tableSeatFields } from "./seat-fields/combined-seat-fields";
import { ISeat } from "../types";

const $tableSeats = createStore<ISeat[]>([]);
$tableSeats.reset(resetTable);

/***
 * Add seat
 ***/
const _addTableSeat = createEvent<ISeat>();
forward({ from: _addTableSeat, to: resetSeat });
$tableSeats.on(_addTableSeat, (state, payload) => {
  return [...state, payload];
});

sample({
  clock: addTableSeat,
  source: $tableSeatFields,
  target: _addTableSeat,
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
