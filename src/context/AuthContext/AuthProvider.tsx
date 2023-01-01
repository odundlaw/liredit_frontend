import React, { useMemo, useCallback, useState } from "react";
import { useMeQuery } from "../../gql/graphql";
import AuthContext, { AuthContextType } from "./AuthContext";

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { data } = useMeQuery();

  const logoutHandler = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  const loginHandler = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const value = useMemo(
    () => ({
      logOut: logoutHandler,
      login: loginHandler,
      isLoggedIn: isLoggedIn && data?.me ? true : false,
      authUserData: data?.me ? data.me : {},
    }),
    [data?.me, isLoggedIn]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
