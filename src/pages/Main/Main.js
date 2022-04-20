import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Main.scss";
import Nav from "./nav/nav.js";

const Main = (props) => {
  return (
    <div className="wrapper">
      <header>
        <div className="header-top">
          <div>
            <h1>오늘 뭐먹 wee ?</h1>
          </div>
          <div className="login-join">
            <span>
              <Link to="/login">로그인</Link>
            </span>
            <span>
              <Link to="/Register">회원가입</Link>
            </span>
          </div>
        </div>
        <Nav />
      </header>

      <main>
        <div>.</div>
      </main>

      <aside>
        <div>.</div>
      </aside>

      <div className="clear"></div>
    </div>
  );
};

export default Main;
