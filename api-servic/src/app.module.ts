import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { JwtModule } from "@nestjs/jwt";

import { AppService } from "@/app.service";
import { AppController } from "@/app.controller";
import { getRMQConfig, getJWTConfig } from "@/configs";
import { LoggerModule } from "@/logger";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true,
    }),
    LoggerModule,
    // RMQModule.forRootAsync(getRMQConfig()),
    JwtModule.registerAsync(getJWTConfig()),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
