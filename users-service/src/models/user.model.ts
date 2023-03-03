import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

import { USER_ROLE, USER_STATUS } from "@/const";

@Entity("users")
export class UserModel {
  @PrimaryGeneratedColumn({
    type: "bigint",
    name: "user_id",
  })
  user_id: number;

  @Column({
    nullable: false,
  })
  fullName: string;

  @Column({
    nullable: false,
    unique: true,
  })
  email: string;

  @Column({
    nullable: false,
  })
  phone: string;

  @Column({
    nullable: false,
    name: "password",
  })
  password_hash: string;

  @Column({
    nullable: false,
    default: USER_STATUS.CREATED,
    enum: USER_STATUS,
  })
  status: USER_STATUS;

  @Column({
    nullable: false,
    default: USER_ROLE.HOSTESS,
    enum: USER_ROLE,
  })
  role: USER_ROLE;
}
