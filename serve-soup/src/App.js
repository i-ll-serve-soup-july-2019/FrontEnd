import React from "react";
import "./App.css";

//implementing routing
import { Route } from "react-router-dom";

//importing homepage component which includes
//a list of items
import HomePage from "./components/HomePage";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage} />
      <Route path="/protected" component={HomePage} />
    </div>
  );
}

export default App;
