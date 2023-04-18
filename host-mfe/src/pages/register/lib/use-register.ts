import { useCallback } from "react";
import { Requests } from "kisszaya-table-reservation/lib/requests";

import { authApi } from "entities/auth";

export const useRegister = () => {
  const register = useCallback(async (values: Requests.UserRegister) => {
    const res = await authApi.registerUser(values);

    console.log("res", res);
  }, []);

  return { register };
};
