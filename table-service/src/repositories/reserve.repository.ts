import { Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { ReserveModel } from "@/models";
import { Repository } from "typeorm";
import { ReserveEntity } from "@/entities";
import { RESERVE_STATUS } from "kisszaya-table-reservation/lib/interfaces";

export class ReserveRepository {
  private readonly logger = new Logger(ReserveRepository.name);

  constructor(
    @InjectRepository(ReserveModel)
    private readonly reserveModel: Repository<ReserveModel>
  ) {}

  public async createReserve(reserveEntity: ReserveEntity) {
    this.logger.log("create reserve");

    const newReserve = this.reserveModel.create(reserveEntity);

    await this.reserveModel.save(newReserve);
    return newReserve;
  }

  public async changeReserveStatus(reserve_id: number, status: RESERVE_STATUS) {
    this.logger.log("change reserve status");

    return this.reserveModel.update(
      {
        reserve_id,
      },
      { status }
    );
  }

  public async findAllReservesByUserId(user_id: number) {
    this.logger.log("find all reserves by user_id");

    return this.reserveModel.findBy({
      user_id,
    });
  }

  public async getReserveByReserveId(reserve_id: number) {
    this.logger.log("get reserve by reserve_id");

    return this.reserveModel.findOneBy({
      reserve_id,
    });
  }
}
