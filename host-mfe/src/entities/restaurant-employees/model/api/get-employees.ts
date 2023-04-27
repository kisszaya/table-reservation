import { Responses } from "kisszaya-table-reservation/lib/responses";

import { api, serverRoutes } from "shared/api";

export const getRestaurantEmployees = async (props: {
  restaurant_id: string;
}) => {
  const { restaurant_id } = props;
  return await api.get<Responses.GetRestaurantEmployees>(
    serverRoutes.employees(restaurant_id)
  );
};
