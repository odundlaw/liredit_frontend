import { createContext } from "react";
import { User } from "../../types/types";

export type AuthContextType = {
  isLoggedIn: boolean;
  authUserData: User;
  logOut: () => void;
  login: () => void;
};

const AuthContext = createContext({
  isLoggedIn: false,
  authUserData: {},
  logOut: () => {},
  login: () => {},
});

export default AuthContext;
