import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { ReserveModel } from "@/models";
import { ReserveRepository } from "@/repositories";
import { ReservesService } from "./reserves.service";
import { ReservesController } from "./reserves.controller";
import { TablesModule } from "@/tables/tables.module";

@Module({
  imports: [TypeOrmModule.forFeature([ReserveModel]), TablesModule],
  providers: [ReserveRepository, ReservesService],
  controllers: [ReservesController],
})
export class ReservesModule {}
