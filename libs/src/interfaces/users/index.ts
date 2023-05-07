export interface IUser {
  user_id?: number;
  fullName: string;
  email: string;
  phone?: string;
  status: USER_STATUS;
  password_hash: string;
  rights?: USER_RIGHTS;
}

export enum USER_RIGHTS {
  EMPLOYEE = 'employee',
  VISITOR = 'visitor'
}

export enum USER_ROLE {
  HOSTESS = "hostess",
  ADMINISTRATOR = "administrator",
  BLOCKED = 'blocked'
}

export enum USER_STATUS {
  CREATED = "created",
  REGISTERED = "registered",
  BLOCKED = "blocked",
}
