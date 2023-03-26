import { Responses } from "kisszaya-table-reservation/lib/responses";
import axios from "axios";

import { baseURL, serverRoutes } from "shared/api";

export const getMeRestaurants = async (accessToken: string) => {
  return await axios.get<Responses.GetUserRestaurants>(
    baseURL + serverRoutes.meRestaurants,
    {
      withCredentials: true,
      headers: { Authorization: `Bearer ${accessToken}` },
    }
  );
};

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
