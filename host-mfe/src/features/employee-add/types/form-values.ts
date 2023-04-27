import { USER_ROLE } from "kisszaya-table-reservation/lib/interfaces";
import { Requests } from "kisszaya-table-reservation/lib/requests";

export type IFormValues = Omit<Requests.AddRestaurantEmployee, "roles"> & {
  roles: USER_ROLE;
};
