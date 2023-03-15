import { USER_ROLE, USER_STATUS } from "../interfaces";

export namespace Responses {
  export interface UserLogin {
    accessToken: string;
    status: USER_STATUS;
  }

  export interface UserRegister {
    status: "success";
  }

  export interface UpdateRefreshToken {
    accessToken: string;
    refreshToken: string;
  }

  export interface GetMeInfo {
    fullName: string;
    email: string;
    phone?: string;
    status: USER_STATUS;
  }

  export interface UserLogout {
    status: "success";
  }

  export interface CreateRestaurant {
    restaurant_id: number;
    name: string;
    roles: USER_ROLE[];
    photos: string[];
    address: string;
    city: string;
  }

  export interface GetUserRestaurants {
    restaurants: {
      restaurant_id: number;
      name: string;
      roles: USER_ROLE[];
      photos: string[];
      address: string;
      city: string;
    }[];
  }
}
