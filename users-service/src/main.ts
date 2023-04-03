import { NestFactory } from "@nestjs/core";
import { Logger } from "@nestjs/common";
import { Transport, MicroserviceOptions } from "@nestjs/microservices";
import {
  PinoLoggerService,
  loggerMiddleware,
} from "kisszaya-table-reservation/lib/logger";

import { AppModule } from "@/app.module";
import { processEnv } from "@/utils";

if (processEnv("SETUP.NODE") !== "development") {
  require("module-alias/register");
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // consts port = processEnv("SETUP.PORT");
  // consts app = await NestFactory.createMicroservice<MicroserviceOptions>(
  //   AppModule,
  //   {
  //     transport: Transport.TCP,
  //     options: {
  //       port: Number(port),
  //     },
  //   }
  // );

  const logger = loggerMiddleware(app);
  app.use(logger);
  app.useLogger(app.get(PinoLoggerService));

  const globalPrefix = "api";
  app.setGlobalPrefix(globalPrefix);

  const port = processEnv("SETUP.PORT");

  await app.listen(port, () => {
    Logger.log(`Listening on http://localhost:${port}/api`);
  });
}

bootstrap();
