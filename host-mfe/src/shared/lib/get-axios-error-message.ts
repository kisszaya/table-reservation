import { AxiosError } from "axios";

export const getAxiosErrorMessage = (error: AxiosError) => {
  // @ts-ignore
  return error.response?.data?.message ?? "Error";
};
