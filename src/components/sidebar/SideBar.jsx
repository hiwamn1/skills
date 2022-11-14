import React from "react";
import { Link } from "react-router-dom";

import "./SideBar.scss";

const SideBar = () => {
  return (
    <>
             <div className="sidebar">
          <h1
         
            className="sidebar__title"
          >
            Skillsgram
          </h1>
          <h2></h2>
          <ul className="sidebar__items">
            <li className="sidebar__item animate__animated animate__bounceIn animate__fast">
              <Link to="/profile" className="Link ">
                profile
              </Link>
            </li>
            <li className="sidebar__item animate__animated animate__bounceIn animate__fast">
              <Link to="#" className="Link ">
                folower
              </Link>
            </li>
            <li className="sidebar__item animate__animated animate__bounceIn animate__fast">
              <Link to="#" className="Link ">
                save
              </Link>
            </li>
            <li className="sidebar__item animate__animated animate__bounceIn animate__fast">
              <Link to="#" className="Link ">
                skills
              </Link>
            </li>
            <li className="sidebar__item animate__animated animate__bounceIn animate__fast">
              <Link to="/testmemo" className="Link ">
                test(useMemo)
              </Link>
            </li>
            <li className="sidebar__item animate__animated animate__bounceIn animate__fast">
              <Link to="/weather" className="Link ">
              5000 Colors
              </Link>
            </li>
  
          </ul>
        </div>
    </>
  );
};
export default SideBar;
