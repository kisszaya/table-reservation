import axios from "axios";
import { Responses } from "kisszaya-table-reservation/lib/responses";

import { baseURL, serverRoutes } from "shared/api";

export const getMeInfo = async (accessToken: string) => {
  return await axios.get<Responses.GetMeInfo>(baseURL + serverRoutes.me, {
    withCredentials: true,
    headers: { Authorization: `Bearer ${accessToken}` },
  });
};
