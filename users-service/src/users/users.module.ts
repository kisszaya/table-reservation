import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { JwtModule } from "@nestjs/jwt";

import { UserModel } from "@/models";
import { UserRepository } from "@/repositories";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";

@Module({
  imports: [
    TypeOrmModule.forFeature([UserModel]),
    JwtModule.register({}),
  ],
  providers: [UserRepository, UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
