import { Icon } from "@tabler/icons-react";
import { USER_ROLE } from "kisszaya-table-reservation/lib/interfaces";

export type IRestaurantServices = {
  icon: Icon;
  title: string;
  description: string;
  onClick: () => void;
  roles: USER_ROLE[];
}[];
