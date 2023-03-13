import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { WEEKDAY } from "kisszaya-table-reservation/lib/interfaces";

@Entity("working_time")
export class WorkingTimeModel {
  @PrimaryGeneratedColumn({
    type: "bigint",
    name: "id",
  })
  working_time_id: number;

  @Column({
    nullable: false,
  })
  time_from: number;

  @Column({
    nullable: false,
  })
  time_to: number;

  @Column({
    nullable: false,
    enum: WEEKDAY,
  })
  weekday: WEEKDAY;

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
