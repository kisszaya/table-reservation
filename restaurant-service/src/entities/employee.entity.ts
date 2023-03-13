import {
  IEmployee,
  USER_ROLE,
} from "kisszaya-table-reservation/lib/interfaces";

export class EmployeeEntity implements IEmployee {
  employee_id?: number;
  restaurant_id: number;
  user_id: number;
  roles?: USER_ROLE[] = [];

  constructor(employee: IEmployee) {
    this.roles = employee.roles;
    this.restaurant_id = employee.restaurant_id;
    this.employee_id = employee.employee_id;
    this.user_id = employee.user_id;
  }
}
