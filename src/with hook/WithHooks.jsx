import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function WithHooks(Component) {
 
  return function WrappedComponent (props) {
    const navigate = useNavigate();
    const location = useLocation();
    const params = useParams();
    return (
            <Component
          {...props}
          location={location}
          params={params}
          navigate={navigate}
        />
    );
  };
}
export default WithHooks;
