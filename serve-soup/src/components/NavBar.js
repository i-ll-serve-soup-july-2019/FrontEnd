import React from "react";

import { NavLink, Link } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <div className="nav-container">
        <Link to="/">
          <img className="nav-logo" src="./img/logo.png" alt="logo" />
        </Link>
        <ul className="nav-bar">
          <NavLink exact to="/protected" activeClassName="nav-active-link">
            View Inventory
          </NavLink>
          <NavLink to="/protected/addItem" activeClassName="nav-active-link">
            Add item
          </NavLink>
        </ul>
      </div>
    );
  }
}

export default NavBar;
