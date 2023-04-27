import { AxiosError } from "axios";
import { showErrorNotification } from "shared/lib/notifications";

export const responseErrorInterceptor = (error: AxiosError) => {
  //@ts-ignore
  const errorMessage = error.response?.data?.message ?? "Error";
  showErrorNotification("", errorMessage);
};
