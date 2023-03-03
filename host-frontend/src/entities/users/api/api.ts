import { api } from "shared/api";
import { Requests } from "kisszaya-table-reservation/lib/requests";
import { Responses } from "kisszaya-table-reservation/lib/responses";

export const loginUser = async (data: Requests.UserLogin) => {
  return await api.post<Responses.UserLogin>("/users/login", data);
};

export const registerUser = async (data: Requests.UserRegister) => {
  return await api.post<Responses.UserRegister>("/users/register", data);
};
