import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("refresh_sessions")
export class RefreshSessionModel {
  @PrimaryGeneratedColumn({
    type: "bigint",
    name: "session_id",
  })
  session_id: number;

  @Column({
    nullable: false,
  })
  user_id: number;

  @Column({
    nullable: false,
    unique: true,
  })
  refreshToken: string;

  @Column({
    nullable: false,
  })
  fingerprint: string;

  @Column({
    type: "timestamp",
  })
  expiresIn: Date;

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
