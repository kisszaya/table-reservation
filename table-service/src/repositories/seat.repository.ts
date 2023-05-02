import { Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { SeatModel } from "@/models";
import { Repository } from "typeorm";
import { SeatEntity } from "@/entities";

export class SeatRepository {
  private readonly logger = new Logger(SeatRepository.name);

  constructor(
    @InjectRepository(SeatModel)
    private readonly seatModel: Repository<SeatModel>
  ) {}

  public async createSeat(seatEntity: SeatEntity) {
    this.logger.log("create seat");

    const newSeat = this.seatModel.create(seatEntity);

    await this.seatModel.save(newSeat);
    return newSeat;
  }

  public async findSeatByTableId(table_id: number) {
    this.logger.log("find seat by table_id");

    return this.seatModel.findOneBy({
      table_id,
    });
  }
}
