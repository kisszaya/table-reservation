import { Requests } from "kisszaya-table-reservation/lib/requests";
import { Responses } from "kisszaya-table-reservation/lib/responses";

import { api, serverRoutes } from "shared/api";

export interface CreateTableProps {
  restaurant_id: number | string;
  data: Requests.CreateTable;
}

export const createTable = async (props: CreateTableProps) => {
  const { data, restaurant_id } = props;

  return await api.post<Responses.CreateTable>(
    serverRoutes.tables(restaurant_id),
    data
  );
};
