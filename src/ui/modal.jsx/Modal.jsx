import React from "react";

import './Modal.scss';

const Modal = (props)=>{
    return (
        <>
        <div className="modal__main">{props.children}</div>
        </>
    )
}
export default Modal;