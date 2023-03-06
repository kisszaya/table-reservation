export interface IUser {
  user_id?: number;
  fullName: string;
  email: string;
  phone?: string;
  status: USER_STATUS;
  password_hash: string;
}

export enum USER_ROLE {
  HOSTESS = "hostess",
  ADMINISTRATOR = "administrator",
}

export enum USER_STATUS {
  CREATED = "created",
  REGISTERED = "registered",
  BLOCKED = "blocked",
}
