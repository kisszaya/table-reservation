import { ConfigModule, ConfigService } from "@nestjs/config";
import { IRMQServiceAsyncOptions } from "nestjs-rmq";

import { envWrap } from "@/utils";

export const getRMQConfig = (): IRMQServiceAsyncOptions => ({
  inject: [ConfigService],
  imports: [ConfigModule],
  useFactory: (configService: ConfigService) => {
    const envParse = envWrap(configService);

    return {
      exchangeName: envParse("RMQ.EXCHANGE"),
      connections: [
        {
          login: envParse("RMQ.LOGIN"),
          password: envParse("RMQ.PASSWORD"),
          host: envParse("RMQ.HOST"),
        },
      ],
      queueName: envParse("RMQ.QUEUE"),
      prefetchCount: 32,
      serviceName: "users",
    };
  },
});
