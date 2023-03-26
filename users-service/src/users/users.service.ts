import { Injectable, Logger } from "@nestjs/common";
import {
  UsersByIdInfo,
  UsersInfo,
  UsersMeInfo,
} from "kisszaya-table-reservation/lib/contracts";

import { UserRepository } from "@/repositories";
import { UserEntity } from "@/entities";
import { UserNotExistException } from "@/exceptions";

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);

  constructor(private readonly userRepository: UserRepository) {}

  public async meInfo({
    user_id,
  }: UsersMeInfo.Request): Promise<UsersMeInfo.Response> {
    this.logger.log("current user info");

    const user = await this.userRepository.findUserById(user_id);
    if (!user) {
      throw new UserNotExistException(`id ${user_id}`);
    }

    const { email, status, fullName, phone } = new UserEntity(user);

    return {
      status,
      fullName,
      phone,
      email,
    };
  }

  public async infoByEmail(email: string): Promise<UsersInfo.Response> {
    this.logger.log("user info by email");

    const user = await this.userRepository.findUserByEmail(email);
    if (!user) {
      throw new UserNotExistException(`email ${email}`);
    }

    const { status, fullName, phone, user_id } = new UserEntity(user);

    return {
      user_id,
      email,
      phone,
      fullName,
      status,
    };
  }

  public async infoByUserIds(
    data: UsersByIdInfo.Request
  ): Promise<UsersByIdInfo.Response> {
    this.logger.log("user info by user ids");

    const users = await Promise.all(
      data.userIds.map(
        async (user_id) => await this.userRepository.findUserById(user_id)
      )
    );

    return {
      users,
    };
  }
}
