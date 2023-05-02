import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { TableModel } from "@/models";
import { TableRepository } from "@/repositories";
import { TablesService } from "./tables.service";
import { TablesController } from "./tables.controller";

@Module({
  imports: [TypeOrmModule.forFeature([TableModel])],
  providers: [TablesService, TableRepository],
  controllers: [TablesController],
})
export class TablesModule {}
