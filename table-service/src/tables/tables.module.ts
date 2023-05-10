import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { TableModel, SeatModel, TagModel, TableTagModel } from "@/models";
import {
  TableRepository,
  SeatRepository,
  TableTagRepository,
  TagRepository,
} from "@/repositories";
import { TablesService } from "./tables.service";
import { TablesController } from "./tables.controller";
import { TagsService } from "@/tags/tags.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([TableModel, SeatModel, TagModel, TableTagModel]),
  ],
  providers: [
    TablesService,
    TableRepository,
    SeatRepository,
    TagsService,
    TableTagRepository,
    TagRepository,
  ],
  controllers: [TablesController],
  exports: [TablesService],
})
export class TablesModule {}
