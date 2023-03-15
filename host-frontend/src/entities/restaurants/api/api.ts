import { Responses } from "kisszaya-table-reservation/lib/responses";
import { Requests } from "kisszaya-table-reservation/lib/requests";

import { api, serverRoutes } from "shared/api";

export const createRestaurant = async (data: Requests.CreateRestaurant) => {
  return await api.post<Responses.CreateRestaurant>(
    serverRoutes.restaurants,
    data
  );
};
