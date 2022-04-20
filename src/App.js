import React, { useState, useEffect } from "react";
import "./App.scss";
import Nav from "./nav/nav";

function App() {
  return (
    <div className="App">
      <header>
        <div className="header-top">
          <div>
            <h1>오늘 뭐먹 wee ?</h1>
          </div>
          <div className="login-join">
            <span>로그인</span>
            <span>회원가입</span>
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
}

export default App;
