import { USER_ROLE } from "../interfaces";

export namespace Requests {
  export interface UserLogin {
    email: string;
    password: string;
  }

  export interface UserRegister {
    firstName: string;
    lastName: string;
    password: string;
    email: string;
    role: USER_ROLE;
    phone?: string;
  }
}
