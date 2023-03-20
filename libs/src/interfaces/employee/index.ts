import { USER_ROLE } from "..";

export interface IEmployee {
  employee_id?: number;
  restaurant_id: number;
  user_id: number;
  roles?: USER_ROLE[];
}

export interface IRestaurantEmployee {
  employee_id: number;
  fullName: string;
  email: string;
  user_id: number;
  roles: USER_ROLE[];
}
