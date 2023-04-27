import { Requests } from "kisszaya-table-reservation/lib/requests";
import { Responses } from "kisszaya-table-reservation/lib/responses";

import { apiWithoutInterceptors, serverRoutes } from "shared/api";

export const updateTokens = async (data: Requests.UpdateRefreshToken) => {
  return await apiWithoutInterceptors.post<Responses.UpdateRefreshToken>(
    serverRoutes.refresh,
    data
  );
};
