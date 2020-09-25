import React from "react";
import "../style/header.css";
function Header() {
  return (
    <div className="navbar">
      <div>
        <a href="../App.js" className="link">
          <h1>Practice ReactJS</h1>
        </a>
      </div>
      <div>
        <a href="../App.js" className="logo"></a>
      </div>
    </div>
  );
}

export default Header;
