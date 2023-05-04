import { Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { TableModel } from "@/models";
import { Repository } from "typeorm";
import { TableEntity } from "@/entities";

export class TableRepository {
  private readonly logger = new Logger(TableRepository.name);

  constructor(
    @InjectRepository(TableModel)
    private readonly tableModel: Repository<TableModel>
  ) {}

  public async createTable(tableEntity: TableEntity) {
    this.logger.log("create table");

    const newTable = this.tableModel.create(tableEntity);

    await this.tableModel.save(newTable);
    return newTable;
  }

  public async findTablesByRestaurantId(restaurant_id: number) {
    this.logger.log("find tables by restaurant_id");

    return this.tableModel.findBy({
      restaurant_id,
    });
  }
}
