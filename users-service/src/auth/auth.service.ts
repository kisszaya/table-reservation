import { Injectable, Logger } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsersRegister } from "kisszaya-table-reservation/lib/contracts";

import { UserRepository } from "@/repositories";
import { UserEntity } from "@/entities";
import { USER_STATUS } from "kisszaya-table-reservation/lib/interfaces";

@Injectable()
export class AuthService {
  private readonly logger = new Logger();

  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService
  ) {}

  public async login(user_id: number) {
    return {
      accessToken: `accessToken to ${user_id}`,
      refreshToken: `refreshToken to ${user_id}`,
    };
  }

  public async register(data: UsersRegister.Request) {
    const { firstName, lastName, password, role, phone, email } = data;

    const oldUser = await this.userRepository.findUserByEmail(email);
    if (Boolean(oldUser)) {
      throw new Error(`User with email ${email} already exist`);
    }

    const fullName = `${firstName} ${lastName}`;
    const newUserEntity = await new UserEntity({
      fullName,
      role,
      email,
      status: USER_STATUS.CREATED,
      password_hash: "",
      phone,
    }).setPassword(password);
    const newUser = await this.userRepository.createUser(newUserEntity);

    return {
      accessToken: "accessToken",
      refreshToken: "refreshToken",
    };
  }

  public async validateUser(email: string, password: string) {
    const user = await this.userRepository.findUserByEmail(email);
    if (!user) {
      throw new Error(`User with email ${email} don't exist`);
    }

    const userEntity = new UserEntity(user);
    const isCorrectPassword = await userEntity.validatePassword(password);
    if (!isCorrectPassword) {
      throw new Error(`Incorrect password`);
    }

    return { user_id: userEntity.user_id };
  }
}
