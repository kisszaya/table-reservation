import { IRestaurant } from "kisszaya-table-reservation/lib/interfaces/restaurant";

export class RestaurantEntity implements IRestaurant {
  restaurant_id?: number;
  address: string;
  city: string;
  name: string;
  phone: string;
  photos?: string[] = [];

  constructor(restaurant: IRestaurant) {
    this.phone = restaurant.phone;
    if (restaurant.restaurant_id) this.restaurant_id = restaurant.restaurant_id;
    this.name = restaurant.name;
    if (restaurant.photos) this.photos = restaurant.photos;
    this.address = restaurant.address;
    this.city = restaurant.city;
  }
}
