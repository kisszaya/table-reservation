import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { JwtModule } from "@nestjs/jwt";

import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { UserModel } from "@/models";
import { getJWTConfig } from "@/configs";
import { UserRepository } from "@/repositories";

@Module({
  imports: [
    TypeOrmModule.forFeature([UserModel]),
    JwtModule.registerAsync(getJWTConfig()),
  ],
  providers: [AuthService, UserRepository],
  controllers: [AuthController],
})
export class AuthModule {}
