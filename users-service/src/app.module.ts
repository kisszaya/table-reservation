import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { RMQModule } from "nestjs-rmq";
import { LoggerModule } from "kisszaya-table-reservation/lib/logger";
import { TypeOrmModule } from "@nestjs/typeorm";

import { getPostgresConfig, getRMQConfig } from "@/configs";
import { BrokerModule } from "@/broker";

import { AuthModule } from "@/auth/auth.module";
import { UsersModule } from "@/users/users.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true,
    }),
    LoggerModule,
    BrokerModule,
    RMQModule.forRootAsync(getRMQConfig()),
    TypeOrmModule.forRootAsync(getPostgresConfig()),
    AuthModule,
    UsersModule,
  ],
  providers: [],
})
export class AppModule {}
