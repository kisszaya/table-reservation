import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { UserModel } from "@/models";
import { UserEntity } from "@/entities";

@Injectable()
export class UserRepository {
  private readonly logger = new Logger(UserRepository.name);

  constructor(
    @InjectRepository(UserModel)
    private readonly userRepository: Repository<UserModel>
  ) {}

  public async createUser(user: UserEntity) {
    this.logger.log("create new user");

    const newUser = this.userRepository.create(user);

    await this.userRepository.save(newUser);
    return newUser;
  }

  public async findUserById(user_id: number) {
    this.logger.log("find user by id");

    return this.userRepository.findOneBy({ user_id });
  }

  public async findUserByEmail(email: string) {
    this.logger.log(`find user by email`);

    return this.userRepository.findOneBy({ email });
  }
}
