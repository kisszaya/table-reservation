import { Responses } from "kisszaya-table-reservation/lib/responses";

import { api, serverRoutes } from "shared/api";

export const getTags = async () => {
  return await api.get<Responses.GetTags>(serverRoutes.tags);
};
