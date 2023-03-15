import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { USER_ROLE } from "kisszaya-table-reservation/lib/interfaces";

@Entity("employee")
export class EmployeeModel {
  @PrimaryGeneratedColumn({
    type: "bigint",
    name: "id",
  })
  employee_id: number;

  @Column({
    nullable: false,
    type: "bigint",
  })
  restaurant_id: number;

  @Column({
    nullable: false,
    type: "bigint",
  })
  user_id: number;

  @Column("simple-enum", {
    nullable: false,
    enum: USER_ROLE,
  })
  roles: USER_ROLE[];

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
