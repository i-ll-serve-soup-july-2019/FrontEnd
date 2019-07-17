import React from "react";

import { NavLink } from "react-router-dom";

class SignUpNav extends React.Component {
  render() {
    return (
      <div>
        <div className="PageSwitcher">
          <NavLink
            to="/sign-in"
            activeClassName="PageSwitcher__Item--Active"
            className="PageSwitcher__Item"
          >
            Sign In
          </NavLink>
          <NavLink
            exact
            to="/sign-up"
            activeClassName="PageSwitcher__Item--Active"
            className="PageSwitcher__Item"
          >
            Sign Up
          </NavLink>
        </div>
        <div className="FormTitle">
          <NavLink
            to="/sign-in"
            activeClassName="FormTitle__Link--Active"
            className="FormTitle__Link"
          >
            I'll Serve-Soup
          </NavLink>
        </div>
      </div>
    );
  }
}

export default SignUpNav;
