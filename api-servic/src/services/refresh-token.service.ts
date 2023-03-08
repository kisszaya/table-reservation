import { envWrap } from "@/utils";
import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Response } from "express";

@Injectable()
export class RefreshTokenService {
  private readonly logger = new Logger();

  constructor(private readonly configService: ConfigService) {}

  public setRefreshCookie(response: Response, refreshToken) {
    this.logger.log("setRefreshCookie");

    const parseEnv = envWrap(this.configService);
    const expiresIn = parseEnv("JWT.REFRESH_EXPIRATION_TIME");

    response.cookie("refresh", refreshToken, {
      httpOnly: true,
      expires: this.getExpiresInTimestamp(expiresIn),
      // path: "/api/auth",
    });
  }

  public removeRefreshCookie(response: Response) {
    this.logger.log("removeRefreshCookie");

    response.clearCookie("refresh");
  }

  private getExpiresInTimestamp(expiresIn: string) {
    const currentDate = new Date();

    return new Date(currentDate.getTime() + Number(expiresIn));
  }
}
