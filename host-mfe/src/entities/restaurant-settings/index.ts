import { IWorkingTime, setWorkingTime, $workingTime } from "./model";

export { type IWorkingTime };

export const settingsEvents = {
  setWorkingTime,
};

export const settingsStore = {
  $workingTime,
};

export { SettingsDrawer } from "./ui";
