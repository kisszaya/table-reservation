import axios from "axios";
import { Responses } from "kisszaya-table-reservation/lib/responses";

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
