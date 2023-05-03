import {
  IRestaurantEmployee,
  IRestaurantUserPreview,
  ITablePreview,
  IWorkingTime,
  USER_STATUS,
  WEEKDAY,
} from "../interfaces";

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

  export interface GetUserInfo {
    user_id: number;
    fullName: string;
    email: string;
    phone?: string;
    status: USER_STATUS;
  }

  export interface UserLogout {
    status: "success";
  }

  export type CreateRestaurant = IRestaurantUserPreview;

  export interface GetUserRestaurants {
    restaurants: IRestaurantUserPreview[];
  }

  export type GetRestaurantById = IRestaurantUserPreview;

  export interface GetRestaurantEmployees {
    employees: IRestaurantEmployee[];
  }

  export type AddRestaurantEmployee = IRestaurantEmployee;

  export type DeleteRestaurantEmployee = IRestaurantEmployee;

  export type ChangeRestaurantInfo = IRestaurantUserPreview;

  export interface GetRestaurantWorkingTime {
    workingTime: {
      [key in WEEKDAY]?: IWorkingTime;
    };
  }

  export interface ChangeRestaurantWorkingTime {
    workingTime: {
      [key in WEEKDAY]?: IWorkingTime;
    };
  }

  export interface GetRestaurantTables {
    tables: ITablePreview[];
  }

  export interface CreateTable {
    table: ITablePreview;
  }
}
