import { Requests } from "kisszaya-table-reservation/lib/requests";

import { api, serverRoutes } from "shared/api";
import { Responses } from "kisszaya-table-reservation/lib/responses";

export const addEmployee = async (props: {
  restaurant_id: string;
  employee: Requests.AddRestaurantEmployee;
}) => {
  const { restaurant_id, employee } = props;

  return await api.post<Responses.AddRestaurantEmployee>(
    serverRoutes.employees(restaurant_id),
    employee
  );
};

export const removeEmployee = async (props: {
  restaurant_id: string;
  employee_id: string;
}) => {
  const { restaurant_id, employee_id } = props;
  return await api.delete<Responses.DeleteRestaurantEmployee>(
    serverRoutes.employee(restaurant_id, employee_id)
  );
};

export const getRestaurantEmployees = async (props: {
  restaurant_id: string;
}) => {
  const { restaurant_id } = props;
  return await api.get<Responses.GetRestaurantEmployees>(
    serverRoutes.employees(restaurant_id)
  );
};
