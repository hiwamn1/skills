import React from "react";
import Button from "../button/Button";

import "./ExitApp.scss";

const ExitModal = (props) => {
  return (
    <>
      <div className="exit__app ">
        <h1 className="exite__app__title">Do you want to leave ?</h1>
        <div className="exite__app__control">
          <Button onClick={props.onClick}>No</Button>
          <Button onClick={props.signOutHandler}>Yes</Button>
        </div>
      </div>
    </>
  );
};
export default ExitModal;
