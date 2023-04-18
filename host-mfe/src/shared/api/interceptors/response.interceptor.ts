import { AxiosError } from "axios";

export const responseErrorInterceptor = (error: AxiosError) => {
    return error
};
