import {
  USER_RIGHTS,
  USER_STATUS,
} from "kisszaya-table-reservation/lib/interfaces";
import {
  UsersLogout,
  UsersRegister,
  UsersUpdateRefresh,
} from "kisszaya-table-reservation/lib/contracts";
import { Injectable, Logger } from "@nestjs/common";

import { UserRepository } from "@/repositories";
import { UserEntity } from "@/entities";
import { JwtService } from "./jwt.service";
import {
  UserAlreadyExistException,
  UserNotExistException,
  WrongCredentialsException,
} from "@/exceptions";

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService
  ) {}

  public async login(user_id: number, fingerprint: string) {
    this.logger.log("login");

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.generateAccessToken(user_id),
      await this.jwtService.generateRefreshToken(user_id),
    ]);

    await this.jwtService.saveRefreshSession({
      user_id,
      refreshToken,
      fingerprint,
    });

    return {
      accessToken,
      refreshToken,
    };
  }

  public async register(
    data: UsersRegister.Request
  ): Promise<UsersRegister.Response> {
    this.logger.log("register");

    const { firstName, lastName, password, phone, email } = data;

    const oldUser = await this.userRepository.findUserByEmail(email);
    if (Boolean(oldUser) || oldUser.rights === USER_RIGHTS.EMPLOYEE) {
      throw new UserAlreadyExistException(`email ${email}`);
    }

    const fullName = `${firstName} ${lastName}`;
    const newUserEntity = await new UserEntity({
      fullName,
      email,
      status: USER_STATUS.CREATED,
      password_hash: "",
      phone,
    }).setPassword(password);
    await this.userRepository.createUser(newUserEntity);

    return {
      status: "success",
    };
  }

  public async validateUser(email: string, password: string) {
    this.logger.log("validateUser");

    const user = await this.userRepository.findUserByEmail(email);
    if (!user || user.rights == USER_RIGHTS.VISITOR) {
      throw new UserNotExistException(`email ${email}`);
    }

    const userEntity = new UserEntity(user);
    const isCorrectPassword = await userEntity.validatePassword(password);
    if (!isCorrectPassword) {
      throw new WrongCredentialsException("Incorrect password");
    }

    return {
      user_id: userEntity.user_id,
      status: userEntity.status,
    };
  }

  public async refresh(
    data: UsersUpdateRefresh.Request
  ): Promise<UsersUpdateRefresh.Response> {
    this.logger.log("refresh");

    const { refreshToken: oldRefreshToken, fingerprint, user_id } = data;

    const user = await this.userRepository.findUserById(user_id);
    if (!user) {
      throw new UserNotExistException(`id ${user_id}`);
    }

    await this.jwtService.validateRefreshToken(oldRefreshToken, fingerprint);

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.generateAccessToken(user_id),
      await this.jwtService.generateRefreshToken(user_id),
    ]);

    await this.jwtService.saveRefreshSession({
      user_id,
      refreshToken,
      fingerprint,
    });

    return { accessToken, refreshToken };
  }

  public async logout({
    user_id,
    refreshToken,
  }: UsersLogout.Request): Promise<UsersLogout.Response> {
    this.logger.log("logout");

    await this.jwtService.removeRefreshSession(refreshToken);
    return {
      status: "success",
    };
  }
}
