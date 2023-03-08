import { useCallback } from "react";
import { useRouter } from "next/router";

import { getFingerprint } from "features/fingerprint";
import { api, apiWithoutInterceptors } from "shared/api";
import { PRIVATE_PATH, PUBLIC_PATH } from "shared/config";
import { updateToken } from "features/authorization";

import { FormValues } from "../const";
import { authApi } from "entities/auth";

export const useLogin = () => {
  const { push } = useRouter();

  const login = useCallback(async (formValues: FormValues) => {
    const fingerprint = await getFingerprint();

    const values = {
      ...formValues,
      fingerprint,
    };

    const { data } = await authApi.loginUser(values);

    if (data.accessToken) {
      updateToken(data.accessToken);
      api.defaults.withCredentials = true;
      apiWithoutInterceptors.defaults.withCredentials = true;
      await push(PRIVATE_PATH.PROFILE);
    }
  }, []);

  return { login };
};
