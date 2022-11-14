import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import SideBar from "../sidebar/SideBar";
import Profile from "../../pages/profile/Profile";
import Authgaurd from "../authgaurd/Authgaurd";
import Loading from "../loading/Loading";
import UserContext from "../../context/UserContext";

import "./Layout.scss";
import Weather from "../../pages/colors/Colors";
import TestMemo from "../test-memo/TestMemo";

class Layout extends React.Component {
  state = {
    user: {
      id: 12,
      name: "vahid",
      email: "vahidamiri.dev@gmail.com",
      role: "cto",
      avatar: "http://picsum.photos.com",
    },
    errorMessage: "",
    isLoading: true,
    isBackDrop: false,
  };

  changeIsLoadingHandler = () => {
    this.setState({ isLoading: !this.state.isLoading });
  };
  BackDropTrueHandler = () => {
    this.setState({ isBackDrop: true });
  };
  BackDropFalseHandler = () => {
    this.setState({ isBackDrop: false });
  };

  render() {
    return (
      <>
        <Authgaurd>
          <UserContext.Provider
            value={{
              user: this.state.user,
              errorMessage: this.state.errorMessage,
              isLoading: this.state.isLoading,
              isBackDrop: this.state.isBackDrop,
              changeIsLoadingHandler: this.changeIsLoadingHandler,
              BackDropFalseHandler: this.BackDropFalseHandler,
              BackDropTrueHandler: this.BackDropTrueHandler,
            }}
          >
            <div className="layout">
              <header className="main__header">
                <Header />
              </header>

              <aside className="sidebar">
                <SideBar />
              </aside>
              <section className="routes">
                <Routes>
                  <Route path="profile" element={<Profile />} />
                  <Route path="/" element={<Profile />} />
                  <Route path="loading" element={<Loading />} />
                  <Route path="/weather" element={<Weather />} />
                  <Route path="/testmemo" element={<TestMemo />} />
                  {/* //<Route path="*" element={<Navigate to='/notfound' />} /> */}
                </Routes>
              </section>

              <footer className="main__footer">{/* <Footer /> */}</footer>
            </div>
          </UserContext.Provider>
        </Authgaurd>
      </>
    );
  }
}
export default Layout;
