import { useContext } from "react";
import AuthContext from "./AuthContext";

const useAuthState = () => useContext(AuthContext);

export default useAuthState;
