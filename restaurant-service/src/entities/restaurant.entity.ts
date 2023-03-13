import { IRestaurant } from "kisszaya-table-reservation/lib/interfaces/restaurant";

export class RestaurantEntity implements IRestaurant {
  restaurant_id?: number;
  address: string;
  city: string;
  name: string;
  phone: string;
  photos: string[] = [];

  constructor(restaurant: IRestaurant) {
    this.phone = restaurant.phone;
    this.restaurant_id = restaurant.restaurant_id;
    this.name = restaurant.name;
    this.photos = restaurant.photos;
    this.address = restaurant.address;
    this.city = restaurant.city;
  }
}
