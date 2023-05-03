import { Injectable, Logger } from "@nestjs/common";

import { TableRepository } from "@/repositories";
import { BrokerService } from "@/broker";
import {
  TablesCreate,
  TablesGet,
} from "kisszaya-table-reservation/lib/contracts";
import { TABLE_VARIANT } from "kisszaya-table-reservation/lib/interfaces";

@Injectable()
export class TablesService {
  private readonly logger = new Logger(TablesService.name);

  constructor(
    private readonly tableRepository: TableRepository,
    private readonly brokerService: BrokerService
  ) {}

  public async createTable(
    data: TablesCreate.Request
  ): Promise<TablesCreate.Response> {
    return {
      table: {
        width: 2,
        height: 2,
        title: "",
        variant: TABLE_VARIANT.SQUARE,
        restaurant_id: 0,
        table_id: 0,
        seats: [],
        description: "",
        persons_count: 6,
      },
    };
  }

  public async getTables(data: TablesGet.Request): Promise<TablesGet.Response> {
    return {
      tables: [],
    };
  }
}
