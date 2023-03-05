import { Responses } from "kisszaya-table-reservation/lib/responses";

import { api, serverRoutes } from "shared/api";

export const meInfo = async () => {
  return await api.get<Responses.GetMeInfo>(serverRoutes.me);
};
