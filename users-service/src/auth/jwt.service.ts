import { JwtService as NestJwtService } from "@nestjs/jwt";
import {
  IJWTPayload,
  IRefreshSession,
} from "kisszaya-table-reservation/lib/interfaces";
import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

import { envWrap } from "@/utils";
import { SessionRepository } from "@/repositories";
import { SessionEntity } from "@/entities";
import { InvalidSessionException, TokenExpiredException } from "@/exceptions";

@Injectable()
export class JwtService {
  private readonly logger = new Logger(JwtService.name);

  constructor(
    private readonly jwtService: NestJwtService,
    private readonly sessionRepository: SessionRepository,
    private readonly configService: ConfigService
  ) {}

  public async generateAccessToken(
    user_id: number,
  ): Promise<string> {
    this.logger.log("generate access token");

    const parseEnv = envWrap(this.configService);
    const expiresIn = parseEnv("JWT.ACCESS_EXPIRATION_TIME");
    const secret = parseEnv("JWT.ACCESS_SECRET");

    const payload: IJWTPayload = {
      user_id: String(user_id),
      expiresIn: this.getExpiresInTimestamp(expiresIn).toISOString(),
    };

    return this.jwtService.signAsync(payload, {
      secret,
      expiresIn: `${expiresIn}s`,
    });
  }

  public async generateRefreshToken(
    user_id: number,
  ): Promise<string> {
    this.logger.log("generate refresh token");

    const parseEnv = envWrap(this.configService);
    const expiresIn = parseEnv("JWT.REFRESH_EXPIRATION_TIME");
    console.log('TEST 1')
    const secret = parseEnv("JWT.REFRESH_SECRET");

    const payload: IJWTPayload = {
      user_id: String(user_id),
      expiresIn: this.getExpiresInTimestamp(expiresIn).toISOString(),
    };

    return this.jwtService.signAsync(payload, {
      secret,
      expiresIn: `${expiresIn}s`,
    });
  }

  public async validateRefreshToken(token: string, fingerprint: string) {
    this.logger.log("validate refresh token");

    const oldSession = await this.sessionRepository.findSessionByToken(token);
    await this.sessionRepository.deleteSessionByToken(token);

    if (new Date() > oldSession.expiresIn) {
      throw new TokenExpiredException();
    }

    if (oldSession.fingerprint !== fingerprint) {
      throw new InvalidSessionException();
    }
  }

  public async saveRefreshSession(session: Omit<IRefreshSession, "expiresIn">) {
    this.logger.log("save refresh session");

    const parseEnv = envWrap(this.configService);
    const expiresIn = parseEnv("JWT.REFRESH_EXPIRATION_TIME");

    // if opened sessions more than 5, delete all
    const allSessions = await this.sessionRepository.findAllByUserId(
      session.user_id
    );
    if (allSessions.length >= 5) {
      await Promise.all(
        allSessions.map((session) =>
          this.sessionRepository.deleteSessionByToken(session.refreshToken)
        )
      );
    }

    const sessionEntity = new SessionEntity({
      ...session,
      expiresIn: this.getExpiresInTimestamp(expiresIn),
    });
    return await this.sessionRepository.createSession(sessionEntity);
  }

  public async removeRefreshSession(refreshToken: string) {
    this.logger.log("remove refresh session");

    return this.sessionRepository.deleteSessionByToken(refreshToken);
  }

  private getExpiresInTimestamp(expiresIn: string) {
    const currentDate = new Date();

    return new Date(currentDate.getTime() + Number(expiresIn));
  }
}
