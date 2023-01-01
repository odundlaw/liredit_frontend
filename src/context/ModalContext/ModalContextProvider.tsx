import React, { useMemo, useState, useCallback } from "react";
import ModalContext from "./ModalContext";

interface ModalContextProps {
  children: React.ReactNode;
}

const ModalProvider: React.FC<ModalContextProps> = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = useCallback(() => {
    setShowModal((modal) => !modal);
  }, [showModal]);

  const value = useMemo(
    () => ({ showModal, toggleModal }),
    [showModal, toggleModal]
  );
  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export default ModalProvider;
