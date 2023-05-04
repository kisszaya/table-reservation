import { Injectable, Logger } from "@nestjs/common";
import {
  TablesCreate,
  TablesDelete,
  TablesGet,
} from "kisszaya-table-reservation/lib/contracts";

import { SeatRepository, TableRepository } from "@/repositories";
import { BrokerService } from "@/broker";
import { SeatEntity, TableEntity } from "@/entities";
import { TagsService } from "@/tags/tags.service";

@Injectable()
export class TablesService {
  private readonly logger = new Logger(TablesService.name);

  constructor(
    private readonly tableRepository: TableRepository,
    private readonly seatRepository: SeatRepository,
    private readonly tagsService: TagsService,
    private readonly brokerService: BrokerService
  ) {}

  public async createTable(
    data: TablesCreate.Request
  ): Promise<TablesCreate.Response> {
    const { table, restaurant_id, user_id } = data;
    const { tags, seats, ...tableProps } = table;

    const tableEntity = new TableEntity({ ...tableProps, restaurant_id });

    const newTable = await this.tableRepository.createTable(tableEntity);

    for (const seat of seats) {
      const seatEntity = new SeatEntity({
        ...seat,
        table_id: newTable.table_id,
      });

      await this.seatRepository.createSeat(seatEntity);
    }

    await this.tagsService.addTagsToTable({
      table_id: newTable.table_id,
      tags,
    });

    const allSeats = await this.seatRepository.findAllSeatsByTableId(
      newTable.table_id
    );

    return {
      table: {
        ...newTable,
        seats: allSeats,
      },
    };
  }

  public async getTables(data: TablesGet.Request): Promise<TablesGet.Response> {
    const { user_id, restaurant_id } = data;

    const tables: TablesGet.Response["tables"] = [];
    const allTables = await this.tableRepository.findTablesByRestaurantId(
      restaurant_id
    );
    for (const table of allTables) {
      const allSeats = await this.seatRepository.findAllSeatsByTableId(
        table.table_id
      );
      tables.push({
        ...table,
        seats: allSeats,
      });
    }

    return {
      tables,
    };
  }

  public async deleteTable(
    data: TablesDelete.Request
  ): Promise<TablesDelete.Response> {
    const { table_id, user_id, restaurant_id } = data;

    await this.seatRepository.deleteAllSeatsByTableId(table_id);

    const table = await this.tableRepository.findTableByTableId(table_id);
    await this.tableRepository.deleteTableByTableId(table_id);

    await this.tagsService.removeTagsByTable({ table_id: table.table_id });

    return {
      table: {
        ...table,
        seats: [],
      },
    };
  }
}
