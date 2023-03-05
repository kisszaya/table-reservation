import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { RMQModule } from "nestjs-rmq";
import { JwtModule } from "@nestjs/jwt";
import { LoggerModule } from "kisszaya-table-reservation/lib/logger";
import { TypeOrmModule } from "@nestjs/typeorm";

import { AppController } from "@/app.controller";
import { AppService } from "@/app.service";
import { getRMQConfig, getPostgresConfig } from "@/configs";
import { BrokerModule } from "@/broker";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true,
    }),
    LoggerModule,
    BrokerModule,
    RMQModule.forRootAsync(getRMQConfig()),
    JwtModule.registerAsync({}),
    TypeOrmModule.forRootAsync(getPostgresConfig()),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
