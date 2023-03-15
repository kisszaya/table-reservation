import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("discount")
export class DiscountModel {
  @PrimaryGeneratedColumn({
    type: "bigint",
    name: "id",
  })
  discount_id: number;

  @Column({
    nullable: false,
  })
  title: string;

  @Column({
    nullable: false,
  })
  description: string;

  @Column('simple-array', {
    nullable: false,
    default: [],
  })
  photos: string[];

  @Column({
    nullable: false,
    type: "boolean",
    default: false,
  })
  is_active: boolean;

  @Column({
    nullable: false,
    type: "bigint",
  })
  restaurant_id: number;

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
