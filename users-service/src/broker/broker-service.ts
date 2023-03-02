import { ASYNC_STORAGE_KEYS } from "kisszaya-table-reservation/lib/const";
import { Inject, Injectable, Logger } from "@nestjs/common";
import { RMQService } from "nestjs-rmq";
import { AsyncLocalStorage } from "async_hooks";

import { INJECT_TYPES } from "@/const";

@Injectable()
export class BrokerService {
  private readonly logger = new Logger(BrokerService.name);

  constructor(
    private readonly rmqService: RMQService,
    @Inject(INJECT_TYPES.ASYNC_STORAGE)
    private readonly async_storage: AsyncLocalStorage<Map<string, string>>
  ) {}

  public async publish<Request, Response>(topic, message: Request) {
    const traceId = this.getTraceId();

    if (!traceId) this.logger.error("trace id not set");

    return await this.rmqService.send<Request, Response>(topic, message, {
      headers: { traceId },
    });
  }

  private getTraceId() {
    return this.async_storage.getStore()?.get(ASYNC_STORAGE_KEYS.TRACE_ID);
  }
}
