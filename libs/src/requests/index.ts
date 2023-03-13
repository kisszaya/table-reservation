
export namespace Requests {
  export interface UserLogin {
    email: string;
    password: string;
    fingerprint: string;
  }

  export interface UserRegister {
    firstName: string;
    lastName: string;
    password: string;
    email: string;
    phone?: string;
  }

  export interface UpdateRefreshToken {
    fingerprint: string;
  }

  export interface CreateRestaurant {
    name: string;
    city: string;
    address: string;
    phone: string;
  }
}
