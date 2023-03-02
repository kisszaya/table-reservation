import { ConfigModule, ConfigService } from "@nestjs/config";
import { JwtModuleAsyncOptions } from "@nestjs/jwt";

import { envWrap } from "@/utils";

export const getJWTConfig = (): JwtModuleAsyncOptions => ({
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => {
    const envParse = envWrap(configService);

    return {
      secret: envParse("JWT.SECRET"),
    };
  },
});
