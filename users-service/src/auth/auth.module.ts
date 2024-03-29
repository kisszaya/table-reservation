import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { JwtModule } from "@nestjs/jwt";

import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { JwtService } from "./jwt.service";
import { UserModel, RefreshSessionModel } from "@/models";
import { UserRepository, SessionRepository } from "@/repositories";
import { VisitorAuthService } from "@/auth/visitor-auth.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([UserModel]),
    TypeOrmModule.forFeature([RefreshSessionModel]),
    JwtModule.register({}),
  ],
  providers: [
    AuthService,
    UserRepository,
    JwtService,
    SessionRepository,
    VisitorAuthService,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
