import { useCallback } from "react";
import { Requests } from "kisszaya-table-reservation/lib/requests";

import { usersApi } from "entities/users";

export const useLogin = () => {
  const login = useCallback(async (values: Requests.UserLogin) => {
    const res = await usersApi.loginUser(values);

    console.log("log", res);
  }, []);

  return { login };
};
