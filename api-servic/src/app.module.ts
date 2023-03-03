import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { RMQModule } from "nestjs-rmq";
import { LoggerModule } from "kisszaya-table-reservation/lib/logger";

import { getRMQConfig, getJWTConfig } from "@/configs";
import { UsersController } from "@/controllers";

import { BrokerService } from "@/broker";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true,
    }),
    LoggerModule,
    RMQModule.forRootAsync(getRMQConfig()),
    JwtModule.registerAsync(getJWTConfig()),
  ],
  controllers: [UsersController],
  providers: [BrokerService],
})
export class AppModule {}
