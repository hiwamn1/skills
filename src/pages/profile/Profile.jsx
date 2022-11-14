import React from "react";
import UserContext from "../../context/UserContext";
import Loading from "../../components/loading/Loading";

import "./Profile.scss";

class Profile extends React.Component {
  static contextType = UserContext;


  render() {
 
    return (
      <>
        <div className="profile__main">
          <header className="profile__header"></header>
          <main className="profile__main">{this.context.user.role}</main>
          <footer className="profile__footer">{this.context.user.email}</footer>
        </div>
        <div className="photo__user"></div>
      </>
    );
  }
}
export default Profile;
