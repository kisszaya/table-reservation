import { USER_ROLE, USER_STATUS } from "../interfaces";

export namespace Responses {
  export interface UserLogin {
    accessToken: string;
    role: USER_ROLE;
    status: USER_STATUS;
  }

  export interface UserRegister {
    status: "success";
  }

  export interface UpdateRefreshToken {
    accessToken: string;
  }

  export interface GetMeInfo {
    fullName: string;
    email: string;
    phone?: string;
    role: USER_ROLE;
    status: USER_STATUS;
  }

  export interface UserLogout {
    status: "success";
  }
}
