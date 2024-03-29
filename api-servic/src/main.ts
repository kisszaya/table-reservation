import * as cookieParser from "cookie-parser";
import { NestFactory } from "@nestjs/core";
import { Logger } from "@nestjs/common";
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
  app.enableCors({ credentials: true, origin: ["http://localhost:3000", "http://localhost:3012"] });
  app.use(cookieParser());

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
