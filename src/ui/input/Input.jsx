import React from "react";

import "./Input.scss";

const Input = (props) => {
  return (
    <>
      <div>
        <input
          value={props.value}
          name={props.name}
          placeholder={props.placeholder}
          onChange={props.onChange}
          type={props.type}
        />
      </div>
    </>
  );
};
export default Input;
