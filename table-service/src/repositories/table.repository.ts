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

  public async findTableByTableId(table_id: number) {
    this.logger.log("find table by table_id");

    return await this.tableModel.findOneBy({ table_id });
  }

  public async deleteTableByTableId(table_id: number) {
    this.logger.log("delete table by table_id");

    return await this.tableModel.delete({ table_id });
  }

  public async findTablesByRestaurantId(restaurant_id: number) {
    this.logger.log("find tables by restaurant_id");

    return this.tableModel.findBy({
      restaurant_id,
    });
  }
}
