import { WEEKDAY } from "kisszaya-table-reservation/lib/interfaces";

import { api, serverRoutes } from "shared/api";

interface Props {
  restaurant_id: number | string;
  weekday: WEEKDAY;
}

export const deleteWorkingTime = async (props: Props) => {
  const { restaurant_id, weekday } = props;
  return await api.delete(serverRoutes.workingTime(restaurant_id, weekday));
};
