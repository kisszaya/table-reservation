import { USER_ROLE } from "..";

export interface IEmployee {
    employee_id?: number,
    restaurant_id: number,
    user_id: number,
    roles?: USER_ROLE[];
}