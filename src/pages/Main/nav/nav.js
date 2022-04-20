import React from "react";
import "./nav.scss";

function Nav(props) {
  return (
    <div className="navbar">
      <div className="left-nav">
        <ul>
          <li>전체</li>
          <li>한식</li>
          <li>양식</li>
          <li>중식</li>
          <li>일식</li>
          <li>분식</li>
          <li>카페</li>
        </ul>
      </div>
      <div className="right-nav">
        <ul>
          <li>추천순</li>
          <li>가격순</li>
          <li>거리순</li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
