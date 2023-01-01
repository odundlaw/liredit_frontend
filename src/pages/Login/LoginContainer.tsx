import { useEffect } from "react";
import useModalState from "../../context/ModalContext/ModalState";
import { useLoginMutation } from "../../gql/graphql";
import LoginView, { LoginValues } from "./LoginView";

function LoginContainer(): JSX.Element {
  const { toggleModal } = useModalState();

  const [login, { loading, error, data }] = useLoginMutation();

  const loginHandler = (values: LoginValues) => {
    /* alert(JSON.stringify(values, null, 2)); */
    login({
      variables: {
        input: values,
      },
    });
  };

  useEffect(() => {
    if (data?.login?.data) toggleModal();
  }, [data?.login?.data]);

  return (
    <LoginView
      loginHandler={loginHandler}
      toggleModal={toggleModal}
      error={data?.login?.error}
      loading={loading}
    />
  );
}

export default LoginContainer;
