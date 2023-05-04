import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { TagModel, TableTagModel } from "@/models";
import { TableTagRepository, TagRepository } from "@/repositories";

import { TagsService } from "./tags.service";
import { TagsController } from "./tags.controller";

@Module({
  imports: [TypeOrmModule.forFeature([TagModel, TableTagModel])],
  providers: [TagsService, TableTagRepository, TagRepository],
  controllers: [TagsController],
  exports: [TagsService, TableTagRepository, TagRepository],
})
export class TagsModule {}
