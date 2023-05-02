import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("table-tag")
export class TableTagModel {
  @PrimaryGeneratedColumn({
    type: "bigint",
    name: "id",
  })
  table_tag_id: number;

  @Column({
    nullable: false,
    type: "bigint",
  })
  tag_id: number;

  @Column({
    nullable: false,
    type: "bigint",
  })
  table_id: number;

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
