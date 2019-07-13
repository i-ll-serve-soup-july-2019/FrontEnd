import React from 'react';
import './App.css';

//importing homepage component which includes
//a list of items
import HomePage from './components/HomePage';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div className="App">
      <LandingPage />
      {/* Homepage must be under the protected route  */}
      <HomePage />
    </div>
  );
}

export default App;
