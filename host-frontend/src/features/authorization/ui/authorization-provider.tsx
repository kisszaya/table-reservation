import { FC, ReactNode, useCallback, useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import { Loader } from "@mantine/core";

import { getFingerprint } from "features/fingerprint";
import {
  AuthorizationContext,
  IAuthorizationContext,
  updateToken,
} from "../lib";
import { authApi, authStore } from "entities/auth";
import { PUBLIC_PATH } from "shared/config";
import { useIsLoading } from "features/helpers";
import { useStore } from "effector-react";

interface Args {
  children: ReactNode;
}

export const AuthorizationProvider: FC<Args> = ({ children }) => {
  const { push } = useRouter();
  const accessToken = useStore(authStore.$accessToken);
  const { isLoading, startLoading, finishLoading } = useIsLoading(true);

  const getTokens = useCallback(async () => {
    if (accessToken) return;
    startLoading();

    const fingerprint = await getFingerprint();
    try {
      const { data } = await authApi.updateTokens({ fingerprint });
      updateToken(data.accessToken);
    } catch (e) {
      console.log("Error", e);
      await push(PUBLIC_PATH.LOGIN);
    }
  }, []);

  useEffect(() => {
    console.log("Authorization provider");
    getTokens().then(finishLoading);
  });

  const contextValue: IAuthorizationContext = useMemo(() => ({}), []);

  return (
    <AuthorizationContext.Provider value={contextValue}>
      {isLoading && <Loader />}
      {!isLoading && children}
    </AuthorizationContext.Provider>
  );
};
