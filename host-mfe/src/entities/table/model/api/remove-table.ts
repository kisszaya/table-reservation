import { Responses } from "kisszaya-table-reservation/lib/responses";

import { api, serverRoutes } from "shared/api";

interface Props {
  restaurant_id: number | string;
  table_id: number | string;
}

export const removeTable = async (props: Props) => {
  const { restaurant_id, table_id } = props;
  return await api.delete<Responses.DeleteTable>(
    serverRoutes.table(restaurant_id, table_id)
  );
};
