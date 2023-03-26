import axios from "axios";

import { baseURL } from "./config";
import { requestInterceptor, responseErrorInterceptor } from "./interceptors";

export const api = axios.create({ baseURL });

export const apiWithoutInterceptors = axios.create({ baseURL });

api.interceptors.request.use(requestInterceptor);
api.interceptors.response.use(undefined, responseErrorInterceptor);
