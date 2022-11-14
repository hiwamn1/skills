import React from "react";

import "./Button.scss";

const Button = (props) => {
  return (
    <>
      <div>
        <button style={{backgroundColor:`${props.color}`}} className="btnn" onClick={props.onClick}>
          {props.children}
        </button>
      </div>
    </>
  );
};
export default Button;
