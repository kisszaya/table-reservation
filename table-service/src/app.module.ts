import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { RMQModule } from "nestjs-rmq";
import { LoggerModule } from "kisszaya-table-reservation/lib/logger";
import { TypeOrmModule } from "@nestjs/typeorm";

import { getPostgresConfig, getRMQConfig } from "@/configs";
import { BrokerModule } from "@/broker";

import { TablesModule } from "@/tables/tables.module";
import { TagsModule } from "@/tags/tags.module";
import { ReservesModule } from "@/reserves/reserves.module";

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
    TablesModule,
    TagsModule,
    ReservesModule
  ],
  providers: [],
})
export class AppModule {}
