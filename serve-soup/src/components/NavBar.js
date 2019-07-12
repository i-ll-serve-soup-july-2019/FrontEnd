import React from "react";

import { NavLink } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <div className="nav-container">
        <img src="" alt="logo" />
        <ul>
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
