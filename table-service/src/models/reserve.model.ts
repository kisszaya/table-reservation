import {
  RESERVE_SOURCE,
  RESERVE_STATUS,
  TABLE_VARIANT,
} from "kisszaya-table-reservation/lib/interfaces";
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("reserve")
export class ReserveModel {
  @PrimaryGeneratedColumn({
    type: "bigint",
    name: "id",
  })
  reserve_id: number;

  @Column({
    nullable: false,
    type: "int",
  })
  day: number;

  @Column({
    nullable: false,
    type: "int",
  })
  year: number;

  @Column({
    nullable: false,
    type: "int",
  })
  month: number;

  @Column({
    nullable: false,
    type: "int",
  })
  time: number;

  @Column({
    nullable: false,
    type: "bigint",
  })
  user_id: number;

  @Column({
    nullable: false,
    type: "bigint",
  })
  table_id: number;

  @Column({
    nullable: false,
    type: "int",
  })
  persons_count: number;

  @Column({
    nullable: false,
    enum: RESERVE_STATUS,
  })
  status: RESERVE_STATUS;

  @Column({
    nullable: false,
    enum: RESERVE_SOURCE,
  })
  source: RESERVE_SOURCE;

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
