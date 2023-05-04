import { createEvent, createStore } from "effector";

import { ITimeInput } from "shared/ui";

import {
  changeFridayTo,
  changeMondayTo,
  changeSundayTo,
  changeWednesdayTo,
  changeThursdayTo,
  changeThursdayFrom,
  changeTuesdayTo,
  changeFridayFrom,
  changeMondayFrom,
  changeSaturdayFrom,
  changeSaturdayTo,
  changeSundayFrom,
  changeTuesdayFrom,
  changeWednesdayFrom,
} from "../events/working-time";

// monday
const $mondayFromStore = createStore<ITimeInput>(null);
$mondayFromStore.on(changeMondayFrom, (_, payload) => payload);
const $mondayToStore = createStore<ITimeInput>(null);
$mondayToStore.on(changeMondayTo, (_, payload) => payload);

// tuesday
const $tuesdayFromStore = createStore<ITimeInput>(null);
$tuesdayFromStore.on(changeTuesdayFrom, (_, payload) => payload);
const $tuesdayToStore = createStore<ITimeInput>(null);
$tuesdayToStore.on(changeTuesdayTo, (_, payload) => payload);

// wednesday
const $wednesdayFromStore = createStore<ITimeInput>(null);
$wednesdayFromStore.on(changeWednesdayFrom, (_, payload) => payload);
const $wednesdayToStore = createStore<ITimeInput>(null);
$wednesdayToStore.on(changeWednesdayTo, (_, payload) => payload);

// thursday
const $thursdayFromStore = createStore<ITimeInput>(null);
$thursdayFromStore.on(changeThursdayFrom, (_, payload) => payload);
const $thursdayToStore = createStore<ITimeInput>(null);
$thursdayToStore.on(changeThursdayTo, (_, payload) => payload);

// friday
const $fridayFromStore = createStore<ITimeInput>(null);
$fridayFromStore.on(changeFridayFrom, (_, payload) => payload);
const $fridayToStore = createStore<ITimeInput>(null);
$fridayToStore.on(changeFridayTo, (_, payload) => payload);

// saturday
const $saturdayFromStore = createStore<ITimeInput>(null);
$saturdayFromStore.on(changeSaturdayFrom, (_, payload) => payload);
const $saturdayToStore = createStore<ITimeInput>(null);
$saturdayToStore.on(changeSaturdayTo, (_, payload) => payload);

// sunday
const $sundayFromStore = createStore<ITimeInput>(null);
$sundayFromStore.on(changeSundayFrom, (_, payload) => payload);
const $sundayToStore = createStore<ITimeInput>(null);
$sundayToStore.on(changeSundayTo, (_, payload) => payload);

export {
  $mondayToStore,
  $mondayFromStore,
  $tuesdayFromStore,
  $tuesdayToStore,
  $wednesdayFromStore,
  $wednesdayToStore,
  $thursdayFromStore,
  $thursdayToStore,
  $fridayFromStore,
  $fridayToStore,
  $saturdayFromStore,
  $saturdayToStore,
  $sundayFromStore,
  $sundayToStore,
};
