import { Responses } from "kisszaya-table-reservation/lib/responses";

import { apiWithoutInterceptors, serverRoutes } from "shared/api";

export const getUserInfoByEmail = async (email: string) => {
  return await apiWithoutInterceptors.get<Responses.GetUserInfo>(
    serverRoutes.userInfoByEmail(email)
  );
};
