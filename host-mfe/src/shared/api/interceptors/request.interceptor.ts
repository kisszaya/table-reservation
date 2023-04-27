import { IJWTPayload } from "kisszaya-table-reservation/lib/interfaces";
import { InternalAxiosRequestConfig } from "axios";
import decodeJwt from "jwt-decode";

import { getTokenFromBearer, updateToken } from "shared/lib/auth";
import { generateFingerprint } from "shared/lib";
import { authApi } from "entities/auth";

export const requestInterceptor = async (
  config: InternalAxiosRequestConfig
) => {
  if (!config.headers.Authorization) return config;

  const currentAccessToken = getTokenFromBearer(
    config.headers.Authorization as string
  );
  const { expiresIn } = decodeJwt<IJWTPayload>(currentAccessToken);

  if (!expiresIn) return config;
  if (new Date() < new Date(expiresIn)) return config;

  const fingerprint = await generateFingerprint();
  const { data } = await authApi.updateTokens({ fingerprint });
  if (data.accessToken) {
    updateToken(data.accessToken);
  }

  return config;
};
