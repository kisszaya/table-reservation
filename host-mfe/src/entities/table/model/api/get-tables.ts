import { Responses } from "kisszaya-table-reservation/lib/responses";

import { api, serverRoutes } from "shared/api";

interface Props {
  restaurant_id: number | string;
}

export const getTables = async (props: Props) => {
  const { restaurant_id } = props;
  return await api.get<Responses.GetRestaurantTables>(
    serverRoutes.tables(restaurant_id)
  );
};
