import { Responses } from "kisszaya-table-reservation/lib/responses";

import { api, serverRoutes } from "shared/api";

export const removeEmployee = async (props: {
  restaurant_id: string;
  employee_id: string;
}) => {
  const { restaurant_id, employee_id } = props;
  return await api.delete<Responses.DeleteRestaurantEmployee>(
    serverRoutes.employee(restaurant_id, employee_id)
  );
};
