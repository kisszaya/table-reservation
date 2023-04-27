import { Responses } from "kisszaya-table-reservation/lib/responses";

import { api, serverRoutes } from "shared/api";

export const logoutUser = async () => {
  return await api.post<Responses.UserLogout>(
    serverRoutes.logout,
    {},
    {
      withCredentials: true,
    }
  );
};
