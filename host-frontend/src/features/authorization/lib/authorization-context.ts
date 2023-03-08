import { createContext } from "react";

export interface IAuthorizationContext {}

export const AuthorizationContext = createContext<IAuthorizationContext>({});
