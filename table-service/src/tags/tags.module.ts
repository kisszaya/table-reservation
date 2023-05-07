import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { TagModel, TableTagModel, TableModel } from "@/models";
import {
  TableRepository,
  TableTagRepository,
  TagRepository,
} from "@/repositories";

import { TagsService } from "./tags.service";
import { TagsController } from "./tags.controller";

@Module({
  imports: [TypeOrmModule.forFeature([TagModel, TableTagModel, TableModel])],
  providers: [TagsService, TableTagRepository, TagRepository, TableRepository],
  controllers: [TagsController],
  exports: [TagsService, TableTagRepository, TagRepository],
})
export class TagsModule {}
