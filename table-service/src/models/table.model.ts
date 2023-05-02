import { TABLE_VARIANT } from "kisszaya-table-reservation/lib/interfaces";
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("table")
export class TableModel {
  @PrimaryGeneratedColumn({
    type: "bigint",
    name: "id",
  })
  table_id: number;

  @Column({
    nullable: false,
    type: "bigint",
  })
  restaurant_id: number;

  @Column({
    nullable: false,
    type: "int",
  })
  persons_count: number;

  @Column({
    nullable: false,
    enum: TABLE_VARIANT,
  })
  variant: TABLE_VARIANT;

  @Column({
    nullable: false,
  })
  title: string;

  @Column({
    nullable: false,
  })
  description: string;

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
