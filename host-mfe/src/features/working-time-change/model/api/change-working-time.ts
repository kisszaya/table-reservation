import { Requests } from "kisszaya-table-reservation/lib/requests";
import { Responses } from "kisszaya-table-reservation/lib/responses";

import { api, serverRoutes } from "shared/api";

interface Props {
  restaurant_id: number | string;
  data: Requests.ChangeRestaurantWorkingTime;
}

export const changeWorkingTime = async (props: Props) => {
  const { restaurant_id, data } = props;
  return await api.put<Responses.ChangeRestaurantWorkingTime>(
    serverRoutes.workingTimes(restaurant_id),
    data
  );
};
