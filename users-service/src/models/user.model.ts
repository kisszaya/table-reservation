import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

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

  @CreateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
  })
  created_at: Date;

  @UpdateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
    onUpdate: "CURRENT_TIMESTAMP(6)",
  })
  updated_at: Date;
}
