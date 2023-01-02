import React, { useMemo, useEffect } from "react";
import { Navigate } from "react-router";
import useAuthState from "../../context/AuthContext/AuthState";
import useModalState from "../../context/ModalContext/ModalState";
import { useLoginMutation } from "../../gql/graphql";
import LoginView, { LoginValues } from "./LoginView";

function LoginContainer(): JSX.Element {
  const { toggleModal } = useModalState();

  const {
    login: handleLoginSuccess,
    isLoggedIn,
    authUserData,
  } = useAuthState();

  const [login, { loading, error, data }] = useLoginMutation();

  const loginHandler = (values: LoginValues) => {
    login({
      variables: {
        input: values,
      },
    });
  };

  useEffect(() => {
    if (data?.login?.data) toggleModal();
  }, [data?.login?.data]);

  const memoAuthState = useMemo(() => {
    return isLoggedIn ? <Navigate to="/data" /> : null;
  }, [isLoggedIn]);

  return (
    <React.Fragment>
      {memoAuthState}
      <LoginView
        loginHandler={loginHandler}
        toggleModal={toggleModal}
        error={data?.login?.error}
        loading={loading}
      />
    </React.Fragment>
  );
}

export default LoginContainer;
