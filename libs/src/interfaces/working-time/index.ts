
export interface IRestaurantWorkingTime {
  restaurant_working_time_id?: number
  restaurant_id: number;
  working_time_id: number
}

export interface IWorkingTime {
  working_time_id?: number;
  time_from: number;
  time_to: number;
  weekday: WEEKDAY;
}

export enum WEEKDAY {
  MONDAY = 0,
  TUESDAY = 1,
  WEDNESDAY = 2,
  THURSDAY = 3,
  FRIDAY = 4,
  SATURDAY = 5,
  SUNDAY = 6,
}
