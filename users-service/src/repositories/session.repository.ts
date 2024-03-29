import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { IRefreshSession } from "kisszaya-table-reservation/lib/interfaces";

import { RefreshSessionModel } from "@/models";

@Injectable()
export class SessionRepository {
  private readonly logger = new Logger(SessionRepository.name);

  constructor(
    @InjectRepository(RefreshSessionModel)
    private readonly sessionModel: Repository<RefreshSessionModel>
  ) {}

  public async createSession(session: IRefreshSession) {
    this.logger.log("create new session");

    const newSession = this.sessionModel.create(session);

    await this.sessionModel.save(newSession);
    return newSession;
  }

  public async findSessionByTokenAndUserId(refreshToken: string, user_id: number) {
    this.logger.log("find session by token and user_id");

    return this.sessionModel.findOneBy({ refreshToken, user_id });
  }

  public async deleteSessionByTokenAndUserId(refreshToken: string, user_id: number) {
    this.logger.log("delete session by token and user_id");

    return this.sessionModel.delete({ refreshToken, user_id });
  }

  public async findAllByUserId(user_id: number) {
    this.logger.log("find all by user_id");

    return this.sessionModel.findBy({ user_id });
  }
}
