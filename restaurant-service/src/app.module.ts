import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { RMQModule } from "nestjs-rmq";
import { LoggerModule } from "kisszaya-table-reservation/lib/logger";
import { TypeOrmModule } from "@nestjs/typeorm";

import { getPostgresConfig, getRMQConfig } from "@/configs";
import { BrokerModule } from "@/broker";

import { RestaurantsModule } from "@/restaurants/restaurants.module";
import { EmployeeModule } from "@/employee/employee.module";
import { WorkingTimeModule } from "@/working-time/working-time.module";

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
    EmployeeModule,
    WorkingTimeModule,
    RestaurantsModule,
  ],
  providers: [],
})
export class AppModule {}
