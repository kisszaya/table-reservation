import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { RMQModule } from "nestjs-rmq";
import { JwtModule } from "@nestjs/jwt";
import { LoggerModule } from "kisszaya-table-reservation/lib/logger";

import { AppController } from "@/app.controller";
import { AppService } from "@/app.service";
import { getJWTConfig, getRMQConfig } from "@/configs";

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
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
