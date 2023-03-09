import { envWrap } from "@/utils";
import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Response } from "express";

@Injectable()
export class TokenService {
  private readonly logger = new Logger();

  constructor(private readonly configService: ConfigService) {}

  public setRefreshCookie(response: Response, refreshToken) {
    this.logger.log("setRefreshCookie");

    const parseEnv = envWrap(this.configService);
    const expiresIn = parseEnv("JWT.REFRESH_EXPIRATION_TIME");

    response.cookie("refresh", refreshToken, {
      httpOnly: true,
      expires: this.getExpiresInTimestamp(expiresIn),
    });
  }

  public setAccessCookie(response: Response, accessToken) {
    this.logger.log("setRefreshCookie");

    const parseEnv = envWrap(this.configService);
    const expiresIn = parseEnv("JWT.ACCESS_EXPIRATION_TIME");

    response.cookie("access", accessToken, {
      httpOnly: true,
      expires: this.getExpiresInTimestamp(expiresIn),
    });
  }

  public removeRefreshCookie(response: Response) {
    this.logger.log("removeRefreshCookie");

    response.clearCookie("refresh");
  }

  public removeAccessCookie(response: Response) {
    this.logger.log("removeAccessCookie");

    response.clearCookie("access");
  }

  private getExpiresInTimestamp(expiresIn: string) {
    const currentDate = new Date();

    return new Date(currentDate.getTime() + Number(expiresIn));
  }
}
