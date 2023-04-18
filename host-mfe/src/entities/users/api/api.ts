import { Responses } from "kisszaya-table-reservation/lib/responses";

import { api, serverRoutes, apiWithoutInterceptors } from "shared/api";

export const meInfo = async () => {
  return await api.get<Responses.GetMeInfo>(serverRoutes.me);
};

export const userInfoByEmail = async (email: string) => {
  return await apiWithoutInterceptors.get<Responses.GetUserInfo>(
    serverRoutes.userInfoByEmail(email)
  );
};
