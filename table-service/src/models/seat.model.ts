import {
  SEAT_POSITION_VARIANT,
  SEAT_VARIANT,
} from "kisszaya-table-reservation/lib/interfaces";
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("seat")
export class SeatModel {
  @PrimaryGeneratedColumn({
    type: "bigint",
    name: "id",
  })
  seat_id: number;

  @Column({
    nullable: false,
    type: "bigint",
  })
  table_id: number;

  @Column({
    nullable: false,
    enum: SEAT_VARIANT,
  })
  variant: SEAT_VARIANT;

  @Column({
    nullable: false,
    enum: SEAT_POSITION_VARIANT,
  })
  position: SEAT_POSITION_VARIANT;

  @Column({
    nullable: false,
    type: "int",
  })
  position_id: number;

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
