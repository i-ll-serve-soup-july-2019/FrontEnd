import React from 'react';
import { Button } from 'reactstrap';
import '../App.css';

const LandingPage = () => {
  return(
    <div className="landing-page-container">
      <nav>
        <p className="landing page-nav-logo">I'll Serve Soup</p>
        <div classname="landing-page-nav-buttons">
          <Button color="primary">Sign In</Button>
          <Button outline color="secondary">Get Started</Button>
        </div>
      </nav>
      <div className="landing-page-hero">
      </div>
      <div classname="landing-page-content">
      </div>
      <div classname="landing-page-footer">
      </div>
    </div>
  )
}

export default LandingPage;
