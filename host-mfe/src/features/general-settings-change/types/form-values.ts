import { IRestaurantUserPreview } from "kisszaya-table-reservation/lib/interfaces";

export type IFormValues = Omit<
  IRestaurantUserPreview,
  "roles" | "restaurant_id"
>;
