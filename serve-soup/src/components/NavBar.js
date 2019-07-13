import React from "react";

import { NavLink, Link } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <div className="nav-container">
        <Link exact to="/">
          <img className="nav-logo" src="./img/logo.png" alt="logo" />
        </Link>
        <ul className="nav-bar">
          <NavLink exact to="/" activeClassName="nav-active-link">
            View Inventory
          </NavLink>
          <NavLink to="/addItem" activeClassName="nav-active-link">
            Add item
          </NavLink>
        </ul>
      </div>
    );
  }
}

export default NavBar;
