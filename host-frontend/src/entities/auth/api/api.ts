import { Requests } from "kisszaya-table-reservation/lib/requests";
import { Responses } from "kisszaya-table-reservation/lib/responses";

import { api, apiWithoutInterceptors, serverRoutes } from "shared/api";

export const loginUser = async (data: Requests.UserLogin) => {
  return await apiWithoutInterceptors.post<Responses.UserLogin>(
    serverRoutes.login,
    data,
    { withCredentials: true }
  );
};

export const registerUser = async (data: Requests.UserRegister) => {
  return await apiWithoutInterceptors.post<Responses.UserRegister>(
    serverRoutes.register,
    data
  );
};

export const updateTokens = async (data: Requests.UpdateRefreshToken) => {
  return await apiWithoutInterceptors.post<Responses.UpdateRefreshToken>(
    serverRoutes.refresh,
    data
  );
};

export const logout = async () => {
  return await api.post<Responses.UserLogout>(serverRoutes.logout, {}, {
    withCredentials: true,
  });
};
