import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { TableModel, SeatModel } from "@/models";
import { TableRepository, SeatRepository } from "@/repositories";
import { TablesService } from "./tables.service";
import { TablesController } from "./tables.controller";

@Module({
  imports: [TypeOrmModule.forFeature([TableModel, SeatModel])],
  providers: [TablesService, TableRepository, SeatRepository],
  controllers: [TablesController],
})
export class TablesModule {}
