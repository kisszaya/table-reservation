import { Module } from "@nestjs/common";
import { AsyncLocalStorage } from "async_hooks";

import { PinoLoggerService } from "./pino-logger.service";
import { INJECT_TYPES } from "@/types";

const asyncLocalStorage = new AsyncLocalStorage();

@Module({
  providers: [
    PinoLoggerService,
    {
      provide: INJECT_TYPES.ASYNC_STORAGE,
      useValue: asyncLocalStorage,
    },
  ],
  exports: [PinoLoggerService],
})
export class LoggerModule {}
