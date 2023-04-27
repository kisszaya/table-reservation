import { api, serverRoutes } from "shared/api";
import { Responses } from "kisszaya-table-reservation/lib/responses";

export const getMeInfo = async () => {
  return await api.get<Responses.GetMeInfo>(serverRoutes.me);
};
