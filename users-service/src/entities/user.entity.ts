import {
  IUser,
  USER_STATUS,
} from "kisszaya-table-reservation/lib/interfaces";
import { compare, genSalt, hash } from 'bcryptjs';

export class UserEntity implements IUser {
  user_id?: number;
  password_hash: string;
  email: string;
  fullName: string;
  phone?: string;
  status: USER_STATUS;

  constructor(user: IUser) {
    this.password_hash = user.password_hash;
    this.email = user.email;
    this.phone = user.phone;
    this.fullName = user.fullName;
    this.status = user.status;
    this.user_id = user.user_id;
  }

  public async setPassword(password: string) {
    const salt = await genSalt(10);
    this.password_hash = await hash(password, salt);
    return this;
  }

  public async validatePassword (password: string) {
    return compare(password, this.password_hash);
  }
}
