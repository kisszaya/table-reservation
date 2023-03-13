import decodeJwt from "jwt-decode";
import { IJWTPayload } from "kisszaya-table-reservation/lib/interfaces";

import {
  NoRefreshToken,
  NoUserIdInRefreshToken,
  TokenExpiredException,
} from "@/exceptions";

export const getRefreshUserId = (refreshToken: string): number => {
  if (!refreshToken) {
    throw new NoRefreshToken();
  }

  const { expiresIn, user_id } = decodeJwt<IJWTPayload>(refreshToken);

  if (new Date() > new Date(expiresIn)) {
    throw new TokenExpiredException();
  }

  if (!user_id) {
    throw new NoUserIdInRefreshToken();
  }

  return Number(user_id);
};
