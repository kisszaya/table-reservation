import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { JwtModule } from "@nestjs/jwt";

import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { User } from "@/models";
import { getJWTConfig } from "@/configs";

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.registerAsync(getJWTConfig()),
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
