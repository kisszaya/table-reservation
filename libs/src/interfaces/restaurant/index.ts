import { USER_ROLE } from "../users";
import { IWorkingTime, WEEKDAY } from "../working-time";
import { IPreviewTag } from "../tag";

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

export interface IAggregatorRestaurantPreview {
  restaurant_id?: number;
  name: string;
  city: string;
  address: string;
  photo: string;
  tags: IPreviewTag[];
  opened: boolean;
}

export interface IAggregatorRestaurant {
  restaurant_id?: number;
  name: string;
  city: string;
  address: string;
  phone: string;
  photos?: string[];
  tags: IPreviewTag[];
  workingTime: {
    [key in WEEKDAY]?: IWorkingTime;
  };
}
