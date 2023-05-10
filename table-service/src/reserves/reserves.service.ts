import { Injectable, Logger } from "@nestjs/common";
import {
  AggregatorRestaurantsGetById,
  ReservesChangeVisitorStatus,
  ReservesCreate,
  ReservesGetVisitor,
  VisitorInfoByPhone,
  VisitorLogin,
  VisitorRegister,
} from "kisszaya-table-reservation/lib/contracts";

import { ReserveRepository } from "@/repositories";
import { BrokerService } from "@/broker";
import {
  IVisitorReservePreview,
  RESERVE_SOURCE,
  RESERVE_STATUS,
  USER_STATUS,
} from "kisszaya-table-reservation/lib/interfaces";
import { ReserveEntity } from "@/entities";
import { envWrap } from "@/utils";
import { ConfigService } from "@nestjs/config";
import { TablesService } from "@/tables/tables.service";
import { ReserveModel } from "@/models";

@Injectable()
export class ReservesService {
  private readonly logger = new Logger(ReservesService.name);

  constructor(
    private readonly reserveRepository: ReserveRepository,
    private readonly brokerService: BrokerService,
    private readonly configService: ConfigService,
    private readonly tablesService: TablesService
  ) {}

  public async createReserve(
    data: ReservesCreate.Request
  ): Promise<ReservesCreate.Response> {
    const { email, last_name, first_name, phone, ...reserveData } = data;

    let user_id: number = -1;

    try {
      const { user } = await this.brokerService.publish<
        VisitorInfoByPhone.Request,
        VisitorInfoByPhone.Response
      >(VisitorInfoByPhone.topic, { phone });

      user_id = user.user_id;
    } catch (e) {
      const { user_id: userId } = await this.brokerService.publish<
        VisitorRegister.Request,
        VisitorRegister.Response
      >(VisitorRegister.topic, {
        phone,
        email,
        lastName: last_name,
        firstName: first_name,
      });
      user_id = userId;
    }

    const reserveEntity = new ReserveEntity({
      user_id,
      year: 2023,
      status:
        reserveData.source === RESERVE_SOURCE.WALKED_IN
          ? RESERVE_STATUS.ACTIVE
          : RESERVE_STATUS.CREATED,
      ...reserveData,
      month: reserveData.month - 1,
    });

    await this.reserveRepository.createReserve(reserveEntity);

    const parseEnv = envWrap(this.configService);
    const defaultFingerprint = parseEnv("FINGERPRINT");

    const loginData = await this.brokerService.publish<
      VisitorLogin.Request,
      VisitorLogin.Response
    >(VisitorLogin.topic, { phone, fingerprint: defaultFingerprint });

    return loginData;
  }

  public async getVisitorReserves(
    data: ReservesGetVisitor.Request
  ): Promise<ReservesGetVisitor.Response> {
    const { user_id } = data;

    const foundReserves = await this.reserveRepository.findAllReservesByUserId(
      user_id
    );

    const reserves: ReservesGetVisitor.Response["reserves"] = [];

    for (const reserve of foundReserves) {
      reserves.push(await this.getVisitorReservePreview(reserve));
    }

    return {
      reserves,
    };
  }

  public async changeVisitorReserveStatus(
    data: ReservesChangeVisitorStatus.Request
  ): Promise<ReservesChangeVisitorStatus.Response> {
    const { reserve_id, status } = data;

    await this.reserveRepository.changeReserveStatus(reserve_id, status);
    const reserve = await this.reserveRepository.getReserveByReserveId(
      reserve_id
    );

    return {
      reserve: await this.getVisitorReservePreview(reserve),
    };
  }

  private async getVisitorReservePreview(
    reserve: ReserveModel
  ): Promise<IVisitorReservePreview> {
    const table = await this.tablesService.getTableByTableId(reserve.table_id);
    const { restaurant } = await this.brokerService.publish<
      AggregatorRestaurantsGetById.Request,
      AggregatorRestaurantsGetById.Response
    >(AggregatorRestaurantsGetById.topic, {
      restaurant_id: table.restaurant_id,
    });

    const time = new Date(
      reserve.year,
      reserve.month,
      reserve.day,
      Math.floor(reserve.time / 60),
      reserve.time % 60
    );

    return {
      reserve_id: reserve.reserve_id,
      status: reserve.status,
      table,
      time: time.toISOString(),
      persons_count: reserve.persons_count,
      restaurant_address: restaurant.address,
      restaurant_name: restaurant.name,
    };
  }
}
