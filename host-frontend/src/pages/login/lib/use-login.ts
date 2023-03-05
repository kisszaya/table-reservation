import { useCallback } from "react";
import { useRouter } from "next/router";

import { getFingerprint } from "features/fingerprint";
import { api, apiWithoutInterceptors } from "shared/api";
import { PUBLIC_PATH } from "shared/config";
import { updateToken } from "features/authorization";

import { FormValues } from "../const";
import { authApi } from "entities/auth";

export const useLogin = () => {
  const { push } = useRouter();

  const login = useCallback(async (formValues: FormValues) => {
    const fingerprint = await getFingerprint();
    console.log("fingerprint", fingerprint);

    const values = {
      ...formValues,
      fingerprint,
    };

    const { data } = await authApi.loginUser(values);

    if (data.accessToken) {
      updateToken(data.accessToken);
      api.defaults.withCredentials = true;
      apiWithoutInterceptors.defaults.withCredentials = true;
      await push(PUBLIC_PATH.LANDING);
    }
  }, []);

  return { login };
};
