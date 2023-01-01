import { useContext } from "react";
import ModalContext from "./ModalContext";

const useModalState = () => useContext(ModalContext);

export default useModalState;
