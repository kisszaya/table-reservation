import { generateFingerprint } from "shared/lib";

import { updateTokens } from "../api";
import { setAccessToken } from "../events";

export const updateTokensFx = async () => {
  const fingerprint = await generateFingerprint();

  const { data } = await updateTokens({ fingerprint });

  if (data.accessToken) {
    setAccessToken(data.accessToken);
  }

  return { data };
};
