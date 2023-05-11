import { JwtService as NestJwtService } from "@nestjs/jwt";
import {
  IJWTPayload,
  IRefreshSession,
} from "kisszaya-table-reservation/lib/interfaces";
import {Injectable, Logger, UnauthorizedException} from "@nestjs/common";
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

  public async generateAccessToken(user_id: number): Promise<string> {
    this.logger.log("generate access token");

    const parseEnv = envWrap(this.configService);
    const expiresIn = parseEnv("JWT.ACCESS_EXPIRATION_TIME");
    const secret = parseEnv("JWT.ACCESS_SECRET");

    const payload: IJWTPayload = {
      user_id: String(user_id),
      expiresIn: this.getExpiresInTimestamp(expiresIn).toUTCString(),
    };

    return this.jwtService.signAsync(payload, {
      secret,
      expiresIn: `${expiresIn}s`,
    });
  }

  public async generateRefreshToken(user_id: number): Promise<string> {
    this.logger.log("generate refresh token");

    const parseEnv = envWrap(this.configService);
    const expiresIn = parseEnv("JWT.REFRESH_EXPIRATION_TIME");
    const secret = parseEnv("JWT.REFRESH_SECRET");

    const exp = this.getExpiresInTimestamp(expiresIn).toUTCString()

    const payload: IJWTPayload = {
      user_id: String(user_id),
      expiresIn: exp,
    };

    return this.jwtService.signAsync(payload, {
      secret,
      expiresIn: `${expiresIn}s`,
    });
  }

  public async validateRefreshToken(token: string, fingerprint: string, user_id: number) {
    this.logger.log("validate refresh token");

    const parseEnv = envWrap(this.configService);
    const defaultFingerprint = parseEnv("FINGERPRINT");

    const oldSession = await this.sessionRepository.findSessionByTokenAndUserId(token, user_id);

    if (!oldSession) {
      throw new UnauthorizedException()
    }

    await this.sessionRepository.deleteSessionByTokenAndUserId(token, user_id);

    if (new Date() > oldSession.expiresIn) {
      throw new TokenExpiredException();
    }

    if (
      defaultFingerprint !== fingerprint &&
      oldSession.fingerprint !== fingerprint &&
      oldSession.fingerprint !== defaultFingerprint
    ) {
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
      for (const session of allSessions) {
        await this.sessionRepository.deleteSessionByTokenAndUserId(
            session.refreshToken, session.user_id
        )
      }
    }

    const sessionEntity = new SessionEntity({
      ...session,
      expiresIn: this.getExpiresInTimestamp(expiresIn),
    });

    const newSession = await this.sessionRepository.createSession(sessionEntity);

    return newSession;
  }

  public async removeRefreshSession(refreshToken: string, user_id: number) {
    this.logger.log("remove refresh session");

    return this.sessionRepository.deleteSessionByTokenAndUserId(refreshToken, user_id);
  }

  private getExpiresInTimestamp(expiresIn: string) {
    this.logger.log("get expiresIn timestamp");

    const currentDate = new Date();

    return new Date(currentDate.getTime() + (Number(expiresIn) * 1000));
  }
}
