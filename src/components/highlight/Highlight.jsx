import React, { useEffect } from "react";
import {api} from '../../api/apiAxios';
 

import "HighLight.scss";

const HighLight = (props) => {
    useEffect(()=>{
        const response = api.get()
    },[])
  return (
    <>
      <div className="highlight">

      </div>
    </>
  );
};
export default HighLight;
