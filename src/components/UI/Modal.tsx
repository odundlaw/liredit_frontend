import React from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";

interface ModalProps {
  onclick: () => void;
  children: React.ReactNode;
  showModal: boolean;
}

const Modal: React.FC<ModalProps> = ({ children, showModal }) => {
  const element = document.getElementById("modal") as Element;
  let modal;
  modal = (
    <React.Fragment>
      {showModal && (
        <motion.div className="w-full h-full fixed bg-black opacity-60 cursor-pointer z-40" />
      )}
      <motion.div
        className="z-50 fixed flex items-center justify-center w-full"
        layout
        style={{ top: showModal ? "0" : "-120%" }}
      >
        {children}
      </motion.div>
    </React.Fragment>
  );
  return ReactDOM.createPortal(modal, element);
};

export default Modal;
