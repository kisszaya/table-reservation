import { IRefreshSession } from "kisszaya-table-reservation/lib/interfaces";

export class SessionEntity implements IRefreshSession {
  session_id?: number;
  user_id: number;
  expiresIn: Date;
  fingerprint: string;
  refreshToken: string;

  constructor(session: IRefreshSession) {
    this.fingerprint = session.fingerprint;
    this.session_id = session.session_id;
    this.user_id = session.user_id;
    this.expiresIn = session.expiresIn;
    this.refreshToken = session.refreshToken;
  }
}
