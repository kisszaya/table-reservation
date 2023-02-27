import { ConfigModule, ConfigService } from "@nestjs/config";
import { IRMQServiceAsyncOptions } from "nestjs-rmq";

import { envWrap } from "@/utils";

export const getRMQConfig = (): IRMQServiceAsyncOptions => ({
  inject: [ConfigService],
  imports: [ConfigModule],
  useFactory: (configService: ConfigService) => {
    const envParse = envWrap(configService);

    return {
      exchangeName: envParse("rmq.exchange"),
      connections: [
        {
          login: envParse("rmq.login"),
          password: envParse("rmq.password"),
          host: envParse("rmq.host"),
        },
      ],
      prefetchCount: 32,
      serviceName: "purple-account",
    };
  },
});
