import { combine } from "effector";
import { WEEKDAY } from "kisszaya-table-reservation/lib/interfaces";

import {
  $mondayFromStore,
  $mondayToStore,
  $thursdayFromStore,
  $thursdayToStore,
  $wednesdayFromStore,
  $wednesdayToStore,
  $tuesdayFromStore,
  $tuesdayToStore,
  $fridayFromStore,
  $fridayToStore,
  $saturdayFromStore,
  $saturdayToStore,
  $sundayFromStore,
  $sundayToStore,
} from "./working-time";
import { IWorkingTime } from "entities/restaurant-settings";
import { convertTimeToNumber } from "shared/lib";

const $combinedWorkingTime = combine<any>(
  $mondayToStore,
  $mondayFromStore,
  $thursdayFromStore,
  $thursdayToStore,
  $wednesdayFromStore,
  $wednesdayToStore,
  $tuesdayFromStore,
  $tuesdayToStore,
  $fridayFromStore,
  $fridayToStore,
  $saturdayFromStore,
  $saturdayToStore,
  $sundayFromStore,
  $sundayToStore,
  (
    mondayToStore,
    mondayFromStore,
    thursdayFromStore,
    thursdayToStore,
    wednesdayFromStore,
    wednesdayToStore,
    tuesdayFromStore,
    tuesdayToStore,
    fridayFromStore,
    fridayToStore,
    saturdayFromStore,
    saturdayToStore,
    sundayFromStore,
    sundayToStore
  ) => {
    let workingTime: IWorkingTime = {};

    if (mondayToStore && mondayFromStore) {
      workingTime[WEEKDAY.MONDAY] = {
        time_from: convertTimeToNumber(
          mondayFromStore.hours,
          mondayFromStore.minutes
        ),
        time_to: convertTimeToNumber(
          mondayToStore.hours,
          mondayToStore.minutes
        ),
        weekday: WEEKDAY.MONDAY,
      };
    }

    if (thursdayFromStore && thursdayToStore) {
      workingTime[WEEKDAY.THURSDAY] = {
        time_from: convertTimeToNumber(
          thursdayFromStore.hours,
          thursdayFromStore.minutes
        ),
        time_to: convertTimeToNumber(
          thursdayToStore.hours,
          thursdayToStore.minutes
        ),
        weekday: WEEKDAY.THURSDAY,
      };
    }

    if (wednesdayFromStore && wednesdayToStore) {
      workingTime[WEEKDAY.WEDNESDAY] = {
        time_from: convertTimeToNumber(
          wednesdayFromStore.hours,
          wednesdayFromStore.minutes
        ),
        time_to: convertTimeToNumber(
          wednesdayToStore.hours,
          wednesdayToStore.minutes
        ),
        weekday: WEEKDAY.WEDNESDAY,
      };
    }

    if (tuesdayFromStore && tuesdayToStore) {
      workingTime[WEEKDAY.TUESDAY] = {
        time_from: convertTimeToNumber(
          tuesdayFromStore.hours,
          tuesdayFromStore.minutes
        ),
        time_to: convertTimeToNumber(
          tuesdayToStore.hours,
          tuesdayToStore.minutes
        ),
        weekday: WEEKDAY.TUESDAY,
      };
    }

    if (fridayFromStore && fridayToStore) {
      workingTime[WEEKDAY.FRIDAY] = {
        time_from: convertTimeToNumber(
          fridayFromStore.hours,
          fridayFromStore.minutes
        ),
        time_to: convertTimeToNumber(
          fridayToStore.hours,
          fridayToStore.minutes
        ),
        weekday: WEEKDAY.FRIDAY,
      };
    }

    if (saturdayFromStore && saturdayToStore) {
      workingTime[WEEKDAY.SATURDAY] = {
        time_from: convertTimeToNumber(
          saturdayFromStore.hours,
          saturdayFromStore.minutes
        ),
        time_to: convertTimeToNumber(
          saturdayToStore.hours,
          saturdayToStore.minutes
        ),
        weekday: WEEKDAY.SATURDAY,
      };
    }

    if (sundayFromStore && sundayToStore) {
      workingTime[WEEKDAY.SUNDAY] = {
        time_from: convertTimeToNumber(
          sundayFromStore.hours,
          sundayFromStore.minutes
        ),
        time_to: convertTimeToNumber(
          sundayToStore.hours,
          sundayToStore.minutes
        ),
        weekday: WEEKDAY.SUNDAY,
      };
    }

    return workingTime;
  }
);

export { $combinedWorkingTime };
