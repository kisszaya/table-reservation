import { Requests } from "kisszaya-table-reservation/lib/requests";
import { Responses } from "kisszaya-table-reservation/lib/responses";

import { apiWithoutInterceptors, serverRoutes } from "shared/api";

export const loginUser = async (data: Requests.UserLogin) => {
  return await apiWithoutInterceptors.post<Responses.UserLogin>(
    serverRoutes.login,
    data,
    { withCredentials: true }
  );
};
