import React, { useLayoutEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/UI/Header";
import Modal from "../../components/UI/Modal";
import SideBar from "../../components/UI/SideBar";
import useAuthState from "../../context/AuthContext/AuthState";
import useModalState from "../../context/ModalContext/ModalState";
import LoginContainer from "../Login/LoginContainer";

const Layout = () => {
  const { showModal, toggleModal } = useModalState();

  useLayoutEffect(() => {
    const body = document.querySelector("body") as HTMLBodyElement;
    showModal
      ? (body.style.overflow = "hidden")
      : (body.style.overflow = "scroll");
  }, [showModal]);

  return (
    <React.Fragment>
      {showModal ? (
        <Modal onclick={toggleModal} showModal={showModal}>
          <LoginContainer />
        </Modal>
      ) : null}
      <div className="h-auto w-full">
        <Header toggleModal={toggleModal} />
        <SideBar />
        <main
          className={`${
            showModal ? "overflow-y-hidden" : "overflow-auto"
          } p-6 w-full sm:w-[78%] float-right`}
        >
          <Outlet />
        </main>
      </div>
    </React.Fragment>
  );
};

export default Layout;
