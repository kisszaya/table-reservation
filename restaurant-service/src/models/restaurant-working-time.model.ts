import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("restaurant_working_time")
export class RestaurantWorkingTimeModel {
  @PrimaryGeneratedColumn({
    type: "bigint",
    name: "id",
  })
  restaurant_working_time_id: number;

  @Column({
    nullable: false,
    type: "bigint",
  })
  restaurant_id: number;

  @Column({
    nullable: false,
    type: "bigint",
  })
  working_time_id: number;

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
