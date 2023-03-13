import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { DiscountModel } from "@/models";
import { DiscountEntity } from "@/entities";

@Injectable()
export class DiscountRepository {
  private readonly logger = new Logger(DiscountRepository.name);

  constructor(
    @InjectRepository(DiscountModel)
    private readonly discountModel: Repository<DiscountModel>
  ) {}

  public async createDiscount(discount: DiscountEntity) {
    this.logger.log("create new discount");

    const newDiscount = this.discountModel.create(discount);

    await this.discountModel.save(newDiscount);
    return newDiscount;
  }

  public async findDiscountById(discount_id: number) {
    this.logger.log("find discount by id");

    return this.discountModel.findOneBy({ discount_id });
  }

  public async deleteDiscountById(discount_id: number) {
    this.logger.log("delete discount by id");

    return this.discountModel.delete({ discount_id });
  }
}
