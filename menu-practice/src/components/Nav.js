import React from "react";
import "../style/nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <h3>Practice</h3>
      <ul className="nav-links">
        <Link className="link" to="/myinfo">
          <li>My Info</li>
        </Link>
        <Link className="link" to="/timer">
          <li>Timer</li>
        </Link>
        <Link className="link" to="/contact">
          <li>Contact Card</li>
        </Link>
        <Link className="link" to="/todo">
          <li>Todo List</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
