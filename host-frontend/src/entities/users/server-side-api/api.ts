import { Responses } from "kisszaya-table-reservation/lib/responses";
import axios from "axios";

import { baseURL, serverRoutes } from "shared/api";

export const meInfo = async (accessToken: string) => {
  return await axios.get<Responses.GetMeInfo>(baseURL + serverRoutes.me, {
    withCredentials: true,
    headers: { Authorization: `Bearer ${accessToken}` },
  });
};
