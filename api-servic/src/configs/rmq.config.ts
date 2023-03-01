import { ConfigModule, ConfigService } from "@nestjs/config";
import { IRMQServiceAsyncOptions } from "nestjs-rmq";

import { envWrap } from "@/utils";

export const getRMQConfig = (): IRMQServiceAsyncOptions => ({
  inject: [ConfigService],
  imports: [ConfigModule],
  useFactory: (configService: ConfigService) => {
    const envParse = envWrap(configService);

    console.log(
      "meow",
      envParse("rmq.exchange"),
      envParse("rmq.login"),
      envParse("rmq.password"),
      envParse("rmq.host")
    );
    return {
      exchangeName: envParse("rmq.exchange"),
      connections: [
        {
          login: envParse("rmq.login"),
          password: envParse("rmq.password"),
          host: envParse("rmq.host"),
        },
      ],
      queueName: 'test',
      prefetchCount: 32,
      serviceName: "api",
    };
  },
});
