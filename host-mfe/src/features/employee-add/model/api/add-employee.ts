import { Requests } from "kisszaya-table-reservation/lib/requests";
import { Responses } from "kisszaya-table-reservation/lib/responses";

import { apiWithoutInterceptors, serverRoutes } from "shared/api";

export const addEmployee = async (props: {
  restaurant_id: string;
  employee: Requests.AddRestaurantEmployee;
}) => {
  const { restaurant_id, employee } = props;

  return await apiWithoutInterceptors.post<Responses.AddRestaurantEmployee>(
    serverRoutes.employees(restaurant_id),
    employee
  );
};
