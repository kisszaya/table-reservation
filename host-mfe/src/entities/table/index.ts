import { addTable } from "./model";

export { SEAT_POSITION_OPTIONS } from "./const";
export { getSeatPositionByCoordinates } from "./lib";
export { BookingTablesList, SettingsTableList } from "./ui";

export const tableEvents = {
  addTable,
};
