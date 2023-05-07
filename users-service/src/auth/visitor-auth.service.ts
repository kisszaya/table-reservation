import {
  USER_RIGHTS,
  USER_STATUS,
} from "kisszaya-table-reservation/lib/interfaces";
import { VisitorRegister } from "kisszaya-table-reservation/lib/contracts/visitor/visitor.register";
import { Injectable, Logger } from "@nestjs/common";

import { UserRepository } from "@/repositories";
import { VisitorEntity } from "@/entities";
import { JwtService } from "./jwt.service";
import { UserAlreadyExistException, UserNotExistException } from "@/exceptions";

@Injectable()
export class VisitorAuthService {
  private readonly logger = new Logger(VisitorAuthService.name);

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
    data: VisitorRegister.Request
  ): Promise<VisitorRegister.Response> {
    this.logger.log("register");

    const { firstName, lastName, phone, email } = data;

    const oldUser = await this.userRepository.findUserByEmail(email);
    if (Boolean(oldUser) || oldUser.rights === USER_RIGHTS.EMPLOYEE) {
      throw new UserAlreadyExistException(`email ${email}`);
    }

    const fullName = `${firstName} ${lastName}`;
    const newUserEntity = await new VisitorEntity({
      fullName,
      email,
      status: USER_STATUS.CREATED,
      phone,
    });
    const user = await this.userRepository.createUser(newUserEntity);

    return {
      user_id: user.user_id,
    };
  }

  public async validateUser(phone: string) {
    this.logger.log("validateUser");

    const user = await this.userRepository.findUserByPhone(phone);
    if (!user || user.rights == USER_RIGHTS.EMPLOYEE) {
      throw new UserNotExistException(`phone ${phone}`);
    }

    const userEntity = new VisitorEntity(user);

    return {
      user_id: userEntity.user_id,
      status: userEntity.status,
    };
  }
}
