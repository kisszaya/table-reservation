import { Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { TableTagModel } from "@/models";
import { Repository } from "typeorm";
import { TableTagEntity } from "@/entities";

export class TableTagRepository {
  private readonly logger = new Logger(TableTagRepository.name);

  constructor(
    @InjectRepository(TableTagModel)
    private readonly tableTagModel: Repository<TableTagModel>
  ) {}

  public async createTableTag(tableTagEntity: TableTagEntity) {
    this.logger.log("create table tag");

    const newTableTag = this.tableTagModel.create(tableTagEntity);

    await this.tableTagModel.save(newTableTag);
    return newTableTag;
  }

  public async findTableTagByTableId(table_id: number) {
    this.logger.log("find table tag by table_id");

    return this.tableTagModel.findOneBy({
      table_id,
    });
  }

  public async findTableTagsByTagId(tag_id: number) {
    this.logger.log("find table tag by tag_id");

    return this.tableTagModel.findBy({
      tag_id,
    });
  }

  public async deleteTableTagsByTableId(table_id: number) {
    this.logger.log("delete table tag by table_id");

    return this.tableTagModel.delete({
      table_id,
    });
  }
}
