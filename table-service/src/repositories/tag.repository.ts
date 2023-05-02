import { Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { TagModel } from "@/models";
import { Repository } from "typeorm";
import { TagEntity } from "@/entities";

export class TagRepository {
  private readonly logger = new Logger(TagRepository.name);

  constructor(
    @InjectRepository(TagModel)
    private readonly tagModel: Repository<TagModel>
  ) {}

  public async createTag(tagEntity: TagEntity) {
    this.logger.log("create tag");

    const newTag = this.tagModel.create(tagEntity);

    await this.tagModel.save(newTag);
    return newTag;
  }

  public async findTagByText(text: string) {
    this.logger.log("find tag by text");

    return this.tagModel.findOneBy({
      text,
    });
  }
}
