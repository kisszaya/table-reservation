import { createEvent } from "effector";
import { ITimeInput } from "shared/ui";

const changeMondayFrom = createEvent<ITimeInput>();
const changeMondayTo = createEvent<ITimeInput>();
const changeTuesdayFrom = createEvent<ITimeInput>();
const changeTuesdayTo = createEvent<ITimeInput>();
const changeWednesdayFrom = createEvent<ITimeInput>();
const changeWednesdayTo = createEvent<ITimeInput>();
const changeThursdayFrom = createEvent<ITimeInput>();
const changeThursdayTo = createEvent<ITimeInput>();
const changeFridayFrom = createEvent<ITimeInput>();
const changeFridayTo = createEvent<ITimeInput>();
const changeSaturdayFrom = createEvent<ITimeInput>();
const changeSaturdayTo = createEvent<ITimeInput>();
const changeSundayFrom = createEvent<ITimeInput>();
const changeSundayTo = createEvent<ITimeInput>();

export {
  changeMondayFrom,
  changeMondayTo,
  changeTuesdayFrom,
  changeTuesdayTo,
  changeWednesdayFrom,
  changeWednesdayTo,
  changeThursdayFrom,
  changeThursdayTo,
  changeFridayFrom,
  changeFridayTo,
  changeSaturdayFrom,
  changeSaturdayTo,
  changeSundayFrom,
  changeSundayTo,
};
