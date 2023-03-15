import { useRouter } from "next/router";
import { useCallback } from "react";

import { PUBLIC_PATH } from "shared/config";
import { authStore } from "entities/auth";

export const useLogout = () => {
  const { push } = useRouter();

  const logout = useCallback(async () => {
    authStore.logout();
    await push(PUBLIC_PATH.LANDING);
  }, []);

  return { logout };
};
