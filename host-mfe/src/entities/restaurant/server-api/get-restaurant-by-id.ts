import axios from "axios";
import { Responses } from "kisszaya-table-reservation/lib/responses";

import { baseURL, serverRoutes } from "shared/api";

export const getRestaurantById = async (props: {
  accessToken: string;
  restaurant_id: number;
}) => {
  const { restaurant_id, accessToken } = props;

  return await axios.get<Responses.GetRestaurantById>(
    baseURL + serverRoutes.restaurantById(restaurant_id),
    {
      withCredentials: true,
      headers: { Authorization: `Bearer ${accessToken}` },
    }
  );
};
