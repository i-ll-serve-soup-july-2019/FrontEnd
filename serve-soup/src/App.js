import React, { Component } from "react";
import { Route, Link, NavLink } from "react-router-dom";
import SignUpForm from "./pages/SignUpForm";
import SignInForm from "./pages/SignInForm";
import HomePage from "./components/HomePage";
import LandingPage from "./components/LandingPage";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/sign-up" component={SignUpForm} />
        <Route path="/sign-in" component={SignInForm} />
        <Route exact path="/" component={LandingPage} />
        <Route path="/protected" component={HomePage} />
      </div>
    );
  }
}

export default App;
