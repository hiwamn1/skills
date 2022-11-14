import React, { useContext, useEffect, useRef, useState } from "react";
import { removeFromLocalStorage } from "../../local-storage/LocalStorage";
import { token } from "../../local-storage/KeysLocalStorage";

import "./Header.scss";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/button/Button";
import UserContext from "../../context/UserContext";
import BackDrop from "../../ui/back-drop/BackDrop";
import ExitApp from "../../ui/exit-app/ExitApp";
import Modal from "../../ui/modal.jsx/Modal";
const Header = () => {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);
  const InputRef = useRef(null);

  function signOutHandler() {
    removeFromLocalStorage(token);
    navigate("/login");
  }

  useEffect(() => {
    InputRef.current.focus();
  });

  let dropModal = (
    <>
      <BackDrop onClick={userContext.BackDropFalseHandler} />
      <Modal>
      <ExitApp
        onClick={userContext.BackDropFalseHandler}
        signOutHandler={signOutHandler}
      />
      </Modal>
    </>
  );
  if (!userContext.isBackDrop) {
    dropModal = null;
  }
  return (
    <>
      {dropModal}
      <div className="header">
        <div className="search-logo">
          <div className="logo animate__animated animate__flip animate__fast">
            <h2
              style={{
                fontFamily: "montaga",
                color: "#2374e1",
              }}
            >
              S
            </h2>
          </div>
          <div className="search">
            <input
              ref={InputRef}
              className="search-input"
              placeholder="search..."
              name="search"
              type="search"
            />
          </div>
        </div>
        <nav className="navv">
          <div className="nav__item profile">
            <div className="profile__icon"></div>
          </div>
          <div className="nav__item setting">
            <div className="setting__icon"></div>
          </div>
          <div
            className="nav__item sign-out"
            onClick={userContext.BackDropTrueHandler}
          >
            <div className="sign-out__icon"></div>
          </div>
        </nav>
      </div>
    </>
  );
};
export default Header;
