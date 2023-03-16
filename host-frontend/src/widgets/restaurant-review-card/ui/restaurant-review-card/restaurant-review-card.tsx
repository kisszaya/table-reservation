import { FC } from "react";
import Link from "next/link";
import { IRestaurantUserPreview } from "kisszaya-table-reservation/lib/interfaces";

import { PRIVATE_PATH } from "shared/config";

type Args = IRestaurantUserPreview;

export const RestaurantReviewCard: FC<Args> = (props) => {
  return (
    <Link href={PRIVATE_PATH.RESTAURANT(props.restaurant_id)}>
      {props.name}
    </Link>
  );
};
