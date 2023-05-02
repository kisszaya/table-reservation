import { api, serverRoutes } from "shared/api";
import { Requests } from "kisszaya-table-reservation/lib/requests";
import { Responses } from "kisszaya-table-reservation/lib/responses";

interface Props {
  restaurant_id: string | number;
  restaurant: Requests.ChangeRestaurantInfo;
}

export const changeRestaurantInfo = async (props: Props) => {
  const { restaurant_id, restaurant } = props;
  return await api.patch<Responses.ChangeRestaurantInfo>(
    serverRoutes.restaurantById(restaurant_id),
    restaurant
  );
};
