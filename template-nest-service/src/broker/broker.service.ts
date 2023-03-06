import { ASYNC_STORAGE_KEYS } from "kisszaya-table-reservation/lib/const";
import { Injectable, Logger } from "@nestjs/common";
import { RMQService, Message } from "nestjs-rmq";

@Injectable()
export class BrokerService {
  private readonly logger = new Logger(BrokerService.name);
  private traceId = undefined;

  constructor(private readonly rmqService: RMQService) {}

  public async publish<Request, Response>(topic, message: Request) {
    const traceId = this.getTraceId();

    if (!traceId) this.logger.error("trace id not set");

    return await this.rmqService.send<Request, Response>(topic, message, {
      headers: { traceId },
    });
  }

  private getTraceId() {
    return this.traceId;
  }

  public setTraceId(msg: Message) {
    const traceId = msg.properties.headers[ASYNC_STORAGE_KEYS.TRACE_ID];
    this.logger.warn(`Trace id ${traceId}`);
    if (!traceId) {
      this.logger.error("traceId not in msg.properties.headers");
      return;
    }
    this.traceId = traceId;
  }
}
