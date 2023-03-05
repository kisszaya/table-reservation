import { Inject, MiddlewareConsumer, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { RMQModule } from "nestjs-rmq";
import { LoggerModule } from "kisszaya-table-reservation/lib/logger";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AsyncLocalStorage } from "async_hooks";

import { getPostgresConfig, getRMQConfig } from "@/configs";
import { BrokerModule } from "@/broker";

import { AuthModule } from "@/auth/auth.module";
import { UsersModule } from "@/users/users.module";
import { INJECT_TYPES } from "kisszaya-table-reservation/lib/const";
import { AuthController } from "@/auth/auth.controller";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true,
    }),
    LoggerModule,
    BrokerModule,
    RMQModule.forRootAsync(getRMQConfig()),
    TypeOrmModule.forRootAsync(getPostgresConfig()),
    AuthModule,
    UsersModule,
  ],
  providers: [],
})
export class AppModule {
  // constructor(
  //   @Inject(INJECT_TYPES.ASYNC_STORAGE)
  //   private readonly als: AsyncLocalStorage<Map<string, string>>,
  //
  // // readonly private client: ClientProxy
  // // ) {}
  //
  // async onApplicationBootstrap() {
  //   await this.client.connect();
  // }
  //
  // configure(consumer: MiddlewareConsumer) {
  //   console.log('meow 6')
  //   consumer
  //     .apply((req, res, next) => {
  //       console.log('meow 1')
  //       const traceId = "meow";
  //       const store = new Map().set("traceId", traceId);
  //       console.log('meow 2', this.als)
  //       this.als.run(store, () => next());
  //     })
  //     .forRoutes(AuthController);
  // }
}
