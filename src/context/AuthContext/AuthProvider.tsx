import React, { useMemo, useCallback, useState, useEffect } from "react";
import { useLogoutMutation, useMeQuery } from "../../gql/graphql";
import AuthContext, { AuthContextType } from "./AuthContext";

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [logout] = useLogoutMutation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { data } = useMeQuery();

  const logoutHandler = useCallback(() => {
    logout({
      update(cache) {
        cache.modify({
          fields: {
            me() {
              return { me: null };
            },
          },
        });
      },
    });
  }, []);

  const loginHandler = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  useEffect(() => {
    data?.me ? setIsLoggedIn(true) : setIsLoggedIn(false);
  }, [data?.me]);

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
