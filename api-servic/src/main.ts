import { NestFactory } from "@nestjs/core";
import { Logger } from "@nestjs/common";

import { PinoLoggerService } from "@/logger";
import { AppModule } from "@/app.module";
import { loggerMiddleware } from "@/logger/logger.middleware";

if (process.env.NODE_ENV !== "development") {
  require("module-alias/register");
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const logger = loggerMiddleware(app);
  app.use(logger);
  app.useLogger(app.get(PinoLoggerService));

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3333;

  await app.listen(port, () => {
    Logger.log(`Listening on http://localhost:${port}/api`);
  });
}

bootstrap();
