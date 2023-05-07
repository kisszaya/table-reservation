import {
  IUser,
  USER_RIGHTS,
  USER_STATUS,
} from "kisszaya-table-reservation/lib/interfaces";

export class VisitorEntity implements IUser {
  user_id?: number;
  password_hash: string = "";
  email: string = "";
  fullName: string;
  phone?: string;
  status: USER_STATUS = USER_STATUS.CREATED;
  rights?: USER_RIGHTS = USER_RIGHTS.VISITOR;

  constructor(user: Omit<IUser, "password_hash">) {
    this.email = user.email;
    this.phone = user.phone;
    this.fullName = user.fullName;
    this.status = user.status;
    this.user_id = user.user_id;
    this.rights = user.rights;
  }
}
