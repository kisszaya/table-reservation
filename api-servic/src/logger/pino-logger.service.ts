import { AsyncLocalStorage } from "async_hooks";
import { Inject, Injectable, LoggerService } from "@nestjs/common";
import pinoLogger from "pino";

import { INJECT_TYPES } from "@/types";
import { STORAGE_KEYS } from "@/const";

const pino = pinoLogger({
  transport: {
    target: "pino-pretty",
  },
});

@Injectable()
export class PinoLoggerService implements LoggerService {
  constructor(
    @Inject(INJECT_TYPES.ASYNC_STORAGE)
    private readonly async_storage: AsyncLocalStorage<Map<string, string>>
  ) {}

  error(message: any, trace?: string, context?: string): any {
    const traceId = this.getTraceId();

    pino.error({ traceId }, this.getMessage(message, context));
    if (trace) {
      pino.error(trace);
    }
  }

  log(message: any, context?: string): any {
    const traceId = this.getTraceId();

    pino.info({ traceId }, this.getMessage(message, context));
  }

  warn(message: any, context?: string): any {
    const traceId = this.getTraceId();

    pino.warn({ traceId }, this.getMessage(message, context));
  }

  private getMessage(message: any, context?: string) {
    return context ? `[ ${context} ] ${message}` : message;
  }

  private getTraceId() {
    return this.async_storage.getStore()?.get(STORAGE_KEYS.TRACE_ID);
  }
}
