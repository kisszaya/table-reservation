import {USER_ROLE} from "../users";

export interface IRestaurant {
  restaurant_id?: number;
  name: string;
  city: string;
  address: string;
  phone: string;
  photos?: string[];
}

export interface IRestaurantUserPreview {
  restaurant_id: number;
  name: string;
  roles: USER_ROLE[];
  photos: string[];
  address: string;
  city: string;
}