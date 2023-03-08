import { FC, ReactNode, useMemo } from "react";

import { AuthorizationContext, IAuthorizationContext } from "../lib";

interface Args {
  children: ReactNode;
}

export const AuthorizationProvider: FC<Args> = ({ children }) => {
  const contextValue: IAuthorizationContext = useMemo(() => ({}), []);

  return (
    <AuthorizationContext.Provider value={contextValue}>
      {children}
    </AuthorizationContext.Provider>
  );
};
