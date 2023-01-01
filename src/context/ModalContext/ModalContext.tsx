import React from "react";

const ModalContext = React.createContext({
  showModal: false,
  toggleModal: () => {},
});

export default ModalContext;
