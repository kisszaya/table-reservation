import { Responses } from "kisszaya-table-reservation/lib/responses";
import { api, serverRoutes } from "shared/api";

interface Props {
  restaurant_id: number | string;
}

export const getWorkingTime = async (props: Props) => {
  const { restaurant_id } = props;
  return await api.get<Responses.GetRestaurantWorkingTime>(
    serverRoutes.workingTimes(restaurant_id)
  );
};
