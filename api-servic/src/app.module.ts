import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { RMQModule } from "nestjs-rmq";
import { LoggerModule } from "kisszaya-table-reservation/lib/logger";

import { getRMQConfig, getJWTConfig } from "@/configs";
import { UsersController, AuthController } from "@/controllers";
import { BrokerService } from "@/broker";
import { JwtStrategy } from "@/strategies";
import { TokenService } from "@/services";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true,
    }),
    LoggerModule,
    PassportModule,
    RMQModule.forRootAsync(getRMQConfig()),
    JwtModule.registerAsync(getJWTConfig()),
  ],
  controllers: [UsersController, AuthController],
  providers: [BrokerService, JwtStrategy, TokenService],
})
export class AppModule {}
