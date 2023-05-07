import { USER_RIGHTS } from "kisszaya-table-reservation/lib/interfaces";
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

import { USER_STATUS } from "@/const";

@Entity("user")
export class UserModel {
  @PrimaryGeneratedColumn({
    type: "bigint",
    name: "id",
  })
  user_id: number;

  @Column({
    nullable: false,
    name: "full_name",
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
    default: USER_RIGHTS.EMPLOYEE,
    enum: USER_RIGHTS,
  })
  status: USER_STATUS;

  @Column({
    nullable: false,
    default: USER_STATUS.CREATED,
    enum: USER_STATUS,
  })
  rights: USER_RIGHTS;

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
