import { useCallback } from "react";
import { Requests } from "kisszaya-table-reservation/lib/requests";

import { usersApi } from "entities/users";

export const useRegister = () => {
  const register = useCallback(async (values: Requests.UserRegister) => {
    const res = await usersApi.registerUser(values);

    console.log("res", res);
  }, []);

  return { register };
};
