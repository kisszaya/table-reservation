import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModuleAsyncOptions } from "@nestjs/typeorm";

import { models } from "@/models";

import { envWrap } from "@/utils";

export const getPostgresConfig = (): TypeOrmModuleAsyncOptions => ({
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => {
    const envParse = envWrap(configService);

    return {
      type: "postgres",
      host: envParse("POSTGRES.HOST"),
      port: Number(envParse("POSTGRES.PORT")),
      username: envParse("POSTGRES.USER"),
      password: envParse("POSTGRES.PASSWORD"),
      database: envParse("POSTGRES.NAME"),
      entities: models,
      synchronize: true,
    };
  },
});
