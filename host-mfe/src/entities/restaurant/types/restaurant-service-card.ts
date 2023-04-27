import { IRestaurantServices } from ".";

export type IRestaurantServiceCardItem = Omit<
  IRestaurantServices[number],
  "roles"
> & {
  isAvailable: boolean;
};
