import { Requests } from "kisszaya-table-reservation/lib/requests";
import { Responses } from "kisszaya-table-reservation/lib/responses";

import { api, serverRoutes } from "shared/api";

export const registerProfile = async (data: Requests.UserRegister) => {
  return await api.post<Responses.UserRegister>(serverRoutes.register, data);
};
