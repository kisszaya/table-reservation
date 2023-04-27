import { Requests } from "kisszaya-table-reservation/lib/requests";
import { Responses } from "kisszaya-table-reservation/lib/responses";

import { apiWithoutInterceptors, serverRoutes } from "shared/api";

export const registerProfile = async (data: Requests.UserRegister) => {
  return await apiWithoutInterceptors.post<Responses.UserRegister>(
    serverRoutes.register,
    data
  );
};
