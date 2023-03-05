import { Injectable, Logger } from "@nestjs/common";

import { UserRepository } from "@/repositories";
import { UsersMeInfo } from "kisszaya-table-reservation/lib/contracts";
import { UserEntity } from "@/entities";
import { UserNotExistException } from "@/exceptions";

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);

  constructor(private readonly userRepository: UserRepository) {}

  public async meInfo({
    user_id,
  }: UsersMeInfo.Request): Promise<UsersMeInfo.Response> {
    this.logger.log("current user info ");

    const user = await this.userRepository.findUserById(user_id);
    if (!user) {
      throw new UserNotExistException(`id ${user_id}`);
    }

    const { email, role, status, fullName, phone } = new UserEntity(user);

    return {
      status,
      fullName,
      phone,
      email,
      role,
    };
  }
}
