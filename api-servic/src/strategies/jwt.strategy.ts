import { IJWTPayload } from "kisszaya-table-reservation/lib/interfaces";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

import { envWrap } from "@/utils";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(configService: ConfigService) {
    const parseEnv = envWrap(configService);
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: parseEnv("JWT.ACCESS_SECRET"),
    });
  }

  async validate(payload: IJWTPayload) {
    return payload;
  }
}
