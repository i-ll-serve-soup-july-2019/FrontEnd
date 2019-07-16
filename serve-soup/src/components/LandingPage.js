import React from "react";
import { Button } from "reactstrap";
import "../App.css";
//importing link from react-router-dom
import { Link } from "react-router-dom";

const getStartedButtonStyle = {
  background: "#8cbd52",
  color: "white",
  border: "none"
};

const signInButtonStyle = {
  background: "white",
  color: "dodgerblue",
  border: "none"
};

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <nav>
        <span className="landing-page-nav-logo">I'll Serve Soup</span>
        <div className="landing-page-nav-buttons">
          <Button style={signInButtonStyle}>Sign In</Button>
          <Link to="/protected">
            <Button style={getStartedButtonStyle}>Get Started</Button>
          </Link>
        </div>
      </nav>
      <div className="landing-page-hero">
        <h1>Soup Kitchen Inventory Management</h1>
        <h2>Make Keeping Track Of Your Inventory A Breeze</h2>
        <Button style={getStartedButtonStyle}>Get Started</Button>
      </div>
      <div className="landing-page-content">
        <h3>Keeping Track of Inventory Can Be a Nightmare</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="landing-page-footer-nav">
        <div className="landing-page-footer-nav-social" />
        <div className="landing-page-footer-nav-links" />
        <div className="landing-page-footer-nav-links" />
        <div className="landing-page-footer-nav-links" />
      </div>
      <div className="landing-page-footer">
        <div className="landing-page-footer-copyright">
          <span>© 2019 I'll Serve Soup</span>
        </div>
        <div className="landing-page-footer-legal">
          <span>Privacy | Terms of Service | Legal</span>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
