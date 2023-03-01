import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { RMQModule } from "nestjs-rmq";

import { getRMQConfig, getJWTConfig } from "@/configs";
import { LoggerModule } from "@/logger";
import { UsersController, AuthController } from "@/controllers";
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
  controllers: [UsersController, AuthController],
  providers: [BrokerService],
})
export class AppModule {}
