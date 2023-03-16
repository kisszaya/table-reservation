import { FC } from "react";
import { IRestaurantUserPreview } from "kisszaya-table-reservation/lib/interfaces";

type Args = IRestaurantUserPreview;

export const RestaurantCard: FC<Args> = (props) => {
  return <div>{props.name}</div>;
};
