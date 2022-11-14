import React from "react";

import './BackDrop.scss';
const BackDrop = (props)=>{
    return(
        <>
        <div onClick={props.onClick} className="backdrop">

        </div>
        </>
    )
}
export default BackDrop;