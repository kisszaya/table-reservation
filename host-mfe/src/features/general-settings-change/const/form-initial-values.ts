import { IFormValues } from "../types";
import { IRestaurantUserPreview } from "kisszaya-table-reservation/lib/interfaces";

export const useFormInitialValues = (
  restaurant: IRestaurantUserPreview
): IFormValues => ({
  city: restaurant.city,
  name: restaurant.name,
  address: restaurant.address,
  photos: restaurant.photos,
});
