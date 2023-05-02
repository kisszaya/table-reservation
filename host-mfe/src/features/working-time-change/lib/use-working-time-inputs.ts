import { useMemo } from "react";
import { WEEKDAY } from "kisszaya-table-reservation/lib/interfaces";

import * as stores from "../model/store/working-time";
import * as events from "../model/events/working-time";

import { IWorkingTime } from "entities/restaurant-settings";

export const useWorkingTimeInputs = (workingTime: IWorkingTime) => {
  return useMemo(
    () => [
      {
        weekday: WEEKDAY.MONDAY,
        initWorkingTime: workingTime[WEEKDAY.MONDAY] || null,
        storeFrom: stores.$mondayFromStore,
        eventFrom: events.changeMondayFrom,
        storeTo: stores.$mondayToStore,
        eventTo: events.changeMondayTo,
      },
      {
        weekday: WEEKDAY.TUESDAY,
        initWorkingTime: workingTime[WEEKDAY.TUESDAY] || null,
        storeFrom: stores.$tuesdayFromStore,
        eventFrom: events.changeTuesdayFrom,
        storeTo: stores.$tuesdayToStore,
        eventTo: events.changeTuesdayTo,
      },
      {
        weekday: WEEKDAY.WEDNESDAY,
        initWorkingTime: workingTime[WEEKDAY.WEDNESDAY] || null,
        storeFrom: stores.$wednesdayFromStore,
        eventFrom: events.changeWednesdayFrom,
        storeTo: stores.$wednesdayToStore,
        eventTo: events.changeWednesdayTo,
      },
      {
        weekday: WEEKDAY.THURSDAY,
        initWorkingTime: workingTime[WEEKDAY.THURSDAY] || null,
        storeFrom: stores.$thursdayFromStore,
        eventFrom: events.changeThursdayFrom,
        storeTo: stores.$thursdayToStore,
        eventTo: events.changeThursdayTo,
      },
      {
        weekday: WEEKDAY.FRIDAY,
        initWorkingTime: workingTime[WEEKDAY.FRIDAY] || null,
        storeFrom: stores.$fridayFromStore,
        eventFrom: events.changeFridayFrom,
        storeTo: stores.$fridayToStore,
        eventTo: events.changeFridayTo,
      },
      {
        weekday: WEEKDAY.SATURDAY,
        initWorkingTime: workingTime[WEEKDAY.SATURDAY] || null,
        storeFrom: stores.$saturdayFromStore,
        eventFrom: events.changeSaturdayFrom,
        storeTo: stores.$saturdayToStore,
        eventTo: events.changeSaturdayTo,
      },
      {
        weekday: WEEKDAY.SUNDAY,
        initWorkingTime: workingTime[WEEKDAY.SUNDAY] || null,
        storeFrom: stores.$sundayFromStore,
        eventFrom: events.changeSundayFrom,
        storeTo: stores.$sundayToStore,
        eventTo: events.changeSundayTo,
      },
    ],
    [workingTime]
  );
};
